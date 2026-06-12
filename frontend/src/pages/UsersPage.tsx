import { useMemo, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import UserList from "../components/users/UserList";
import UserModal from "../components/users/UserModal";

import { useUsers } from "../hooks/useUsers";
import { useAppContext } from "../context/AppContext";
import { formService } from "../services/formService";

const UsersPage = () => {
  const { users } = useUsers();

  const { forms } = useAppContext();

  const [userForms, setUserForms] =
  useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return (
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
    });
  }, [users, search]);

  const selectedUserForms =
    forms.filter(
      (form) =>
        form.userId === selectedUser?.id
    );
  
  const handleUserClick =
  async (user: any) => {
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
  
  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <UserList
        users={filteredUsers}
        onSelectUser={
    handleUserClick
  }
      />

      <UserModal
        isOpen={!!selectedUser}
        onClose={() =>
          setSelectedUser(null)
        }
        user={selectedUser}
        forms={userForms}
      />
    </>
  );
};

export default UsersPage;