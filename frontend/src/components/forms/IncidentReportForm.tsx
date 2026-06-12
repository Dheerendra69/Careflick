import { useForm } from "react-hook-form";
import Button from "../common/Button";

interface Props {
  users: any[];
  onSubmit: (data: any) => void;
}

const IncidentReportForm = ({
  users,
  onSubmit,
}: Props) => {
  const { register, handleSubmit, reset } =
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
        type="date"
        {...register("date")}
        className="w-full border p-3 rounded"
      />

      <input
        type="time"
        {...register("time")}
        className="w-full border p-3 rounded"
      />

      <input
        {...register("location")}
        placeholder="Location"
        className="w-full border p-3 rounded"
      />

      <input
        {...register("roomNo")}
        placeholder="Room Number"
        className="w-full border p-3 rounded"
      />

      <select
        {...register("incidentType")}
        className="w-full border p-3 rounded"
      >
        <option value="">
          Select Incident Type
        </option>

        <option value="Fall">
          Fall
        </option>

        <option value="Medication Error">
          Medication Error
        </option>

        <option value="Injury">
          Injury
        </option>

        <option value="Behavioral Issue">
          Behavioral Issue
        </option>

        <option value="Other">
          Other
        </option>
      </select>

      <textarea
        {...register(
          "incidentDescription"
        )}
        placeholder="Incident Description"
        className="w-full border p-3 rounded"
      />

      <textarea
        {...register("followupNotes")}
        placeholder="Follow Up Notes"
        className="w-full border p-3 rounded"
      />

      <Button type="submit">
        Submit Incident Report
      </Button>
    </form>
  );
};

export default IncidentReportForm;