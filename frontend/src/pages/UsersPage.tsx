import { useMemo, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import UserList from "../components/users/UserList";
import UserModal from "../components/users/UserModal";
import UserForm from "../components/users/UserForm";

import { useUsers } from "../hooks/useUsers";
import { formService } from "../services/formService";

import type { User } from "../types/user";

import Button from "../components/common/Button";

const UsersPage = () => {
  const {
    users,
    createUser,
    updateUser,
    deleteUser
  } = useUsers();

  const [search, setSearch] =
    useState("");

  const [userForms, setUserForms] =
    useState<any[]>([]);

  const [selectedUser, setSelectedUser] =
    useState<User | null>(null);

  const [
    isUserFormOpen,
    setIsUserFormOpen,
  ] = useState(false);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        user.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );
  }, [users, search]);

  const handleUserClick =
    async (user: User) => {
      try {
        setSelectedUser(user);

        const response =
          await formService.getUserForms(
            user._id
          );

        setUserForms(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  const handleUserSubmit =
    async (data: any) => {
      try {
        if (editingUser) {
          await updateUser(
            editingUser._id,
            data
          );
        } else {
          await createUser(data);
        }

        setIsUserFormOpen(false);
        setEditingUser(null);
      } catch (error) {
        console.error(error);
      }
    };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsUserFormOpen(true);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <Button
          className="ml-4 min-w-fit mt-[-16px]"
          onClick={
            handleAddUser
          }
        >
          Add User
        </Button>
      </div>

      <UserList
        users={filteredUsers}
        onSelectUser={handleUserClick}
        onEditUser={(user) => {
          setEditingUser(user);
          setIsUserFormOpen(true);
        }}
        onDeleteUser={async (user) => {
          const confirmed =
            window.confirm(
              `Delete ${user.name}?`
            );

          if (!confirmed) return;

          await deleteUser(user._id);
        }}
      />

      <UserModal
        isOpen={!!selectedUser}
        onClose={() =>
          setSelectedUser(null)
        }
        user={selectedUser}
        forms={userForms}
      />

      {isUserFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editingUser
                ? "Edit User"
                : "Add User"}
            </h2>

            <UserForm
              initialValues={
                editingUser || {}
              }
              onSubmit={
                handleUserSubmit
              }
              onCancel={() => {
                setIsUserFormOpen(
                  false
                );
                setEditingUser(
                  null
                );
              }}
            />

          </div>
        </div>
      )}
    </>
  );
};

export default UsersPage;