import { useForm } from "react-hook-form";
import type { User } from "../../types/user";
import Button from "../common/Button";
import Input from "../common/Input";

interface UserFormProps {
  initialValues?: Partial<User>;
  onSubmit: (data: any) => void;
  onCancel: (data: any) => void;
}

const UserForm = ({
  initialValues,
  onSubmit,
  onCancel,
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialValues?.name || "",
      email: initialValues?.email || "",
      phone: initialValues?.phone || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Name"
        {...register("name", {
          required: "Name is required",
        })}
        error={
          errors.name?.message as string
        }
      />

      <Input
        label="Email"
        {...register("email", {
          required: "Email is required",
        })}
        error={
          errors.email?.message as string
        }
      />

      <Input
        label="Phone"
        {...register("phone", {
          required: "Phone is required",
        })}
        error={
          errors.phone?.message as string
        }
      />

      <div className="flex gap-2 mt-4">
        <Button type="submit">
          Save User
        </Button>

        <Button
          type="button"
          onClick={onCancel}
          variant="secondary"
        >
          Cancel
        </Button>
      </div>

    </form>
  );
};

export default UserForm;