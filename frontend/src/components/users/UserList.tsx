import type { User } from "../../types/user";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
  onEditUser?: (user: User) => void;
  onDeleteUser?: (user: User) => void;
}

const UserList = ({
  users,
  onSelectUser,
  onEditUser,
  onDeleteUser,
}: UserListProps) => {
  if (!users.length) {
    return (
      <p className="text-center py-8">
        No users found.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard
          key={user._id}
          user={user}
          onClick={() =>
            onSelectUser(user)
          }
          onEdit={() =>
            onEditUser?.(user)
          }
          onDelete={() =>
            onDeleteUser?.(user)
          }
        />
      ))}
    </div>
  );
};

export default UserList;