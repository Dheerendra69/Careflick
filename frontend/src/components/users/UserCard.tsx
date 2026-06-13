import type { User } from "../../types/user";

interface UserCardProps {
  user: User;
  onClick: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const UserCard = ({
  user,
  onClick,
  onEdit,
  onDelete,
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

      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit?.();
          }}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.();
          }}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;