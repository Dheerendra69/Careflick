import { useForm } from "react-hook-form";
import type { User } from "../../types/user";
import Button from "../common/Button";
import Input from "../common/Input";

interface UserFormProps {
  initialValues?: Partial<User>;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const UserForm = ({
  initialValues,
  onSubmit,
  onCancel,
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: initialValues?.name || "",
      email: initialValues?.email || "",
      phone: initialValues?.phone || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        label="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message:
              "Name must be at least 2 characters",
          },
          maxLength: {
            value: 50,
            message:
              "Name cannot exceed 50 characters",
          },
          pattern: {
            value:
              /^[a-zA-Z\s.'-]+$/,
            message:
              "Name contains invalid characters",
          },
        })}
        error={
          errors.name?.message as string
        }
      />

      <Input
        label="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:
              "Enter a valid email address",
          },
        })}
        error={
          errors.email?.message as string
        }
      />

      <Input
        label="Phone"
        {...register("phone", {
          required: "Phone number is required",

          minLength: {
            value: 7,
            message:
              "Phone number is too short",
          },

        })}
        error={
          errors.phone?.message as string
        }
      />

      <div className="flex gap-2 mt-4">
        <Button
          type="submit"
          disabled={!isValid}
          className={
            !isValid
              ? "opacity-0 pointer-events-none"
              : ""
          }
        >
          Save User
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;