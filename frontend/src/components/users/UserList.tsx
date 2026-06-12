import type { User } from "../../types/user";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const UserList = ({
  users,
  onSelectUser,
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
          key={user.id}
          user={user}
          onClick={() =>
            onSelectUser(user)
          }
        />
      ))}
    </div>
  );
};

export default UserList;