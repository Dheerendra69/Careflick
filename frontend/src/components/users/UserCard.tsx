import type { User } from "../../types/user";

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard = ({
  user,
  onClick,
}: UserCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold">
        {user.name}
      </h3>

      <p className="text-gray-600">
        {user.email}
      </p>

      <p className="text-gray-600">
        {user.phone}
      </p>
    </div>
  );
};

export default UserCard;