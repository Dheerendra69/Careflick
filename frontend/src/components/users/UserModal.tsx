import Modal from "../common/Modal";
import type { User } from "../../types/user";
import type { SubmittedForm } from "../../types/form";
import SubmittedFormsList from "../forms/SubmittedFormsList";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  forms: SubmittedForm[];
}

const UserModal = ({
  isOpen,
  onClose,
  user,
  forms,
}: UserModalProps) => {
  if (!user) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="User Details"
    >
      <div className="space-y-3">
        <div>
          <strong>Name:</strong>{" "}
          {user.name}
        </div>

        <div>
          <strong>Email:</strong>{" "}
          {user.email}
        </div>

        <div>
          <strong>Phone:</strong>{" "}
          {user.phone}
        </div>

        <div>
          <strong>Address:</strong>{" "}
          {user.address?.street},{" "}
          {user.address?.city}
        </div>

        <div>
          <strong>Company:</strong>{" "}
          {user.company?.name}
        </div>

        <hr />

        <h3 className="text-lg font-semibold">
          Submitted Care Forms
        </h3>

        <SubmittedFormsList
          forms={forms}
        />
      </div>
    </Modal>
  );
};

export default UserModal;