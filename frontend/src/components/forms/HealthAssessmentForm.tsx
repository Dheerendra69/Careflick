import { useForm } from "react-hook-form";
import Button from "../common/Button";

interface Props {
  users: any[];
  onSubmit: (data: any) => void;
}

const HealthAssessmentForm = ({
  users,
  onSubmit,
}: Props) => {
  const { register, handleSubmit } =
    useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <select
        {...register("userId", {
          required: true,
        })}
        className="w-full border p-3 rounded"
      >
        <option value="">
          Select User
        </option>

        {users.map((user) => (
          <option
            key={user._id}
            value={user._id}
          >
            {user.name}
          </option>
        ))}
      </select>

      <input
        {...register("residentName")}
        placeholder="Resident Name"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("caregiverName")}
        placeholder="Caregiver Name"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("age")}
        placeholder="Age"
        className="w-full border p-3 rounded"
      />

      <select
        {...register("gender")}
        className="w-full border p-3 rounded"
      >
        <option value="">
          Gender
        </option>

        <option value="Male">
          Male
        </option>

        <option value="Female">
          Female
        </option>

        <option value="Other">
          Other
        </option>
      </select>

      <input
        {...register("roomNo")}
        placeholder="Room Number"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("temperature")}
        placeholder="Temperature"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("bloodPressure")}
        placeholder="Blood Pressure"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("heartRate")}
        placeholder="Heart Rate"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("oxygenLevel")}
        placeholder="Oxygen Level"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("respiratoryRate")}
        placeholder="Respiratory Rate"
        className="w-full border p-3 rounded"
      />

      <textarea
        {...register("caregiverNotes")}
        placeholder="Caregiver Notes"
        className="w-full border p-3 rounded"
      />

      <Button type="submit">
        Submit Health Assessment
      </Button>
    </form>
  );
};

export default HealthAssessmentForm;