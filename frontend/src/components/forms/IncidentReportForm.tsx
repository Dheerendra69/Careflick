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
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <select
          {...register("userId", {
            required:
              "Please select a user",
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

        {errors.userId && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.userId
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register(
            "residentName",
            {
              required:
                "Resident name is required",
              minLength: {
                value: 2,
                message:
                  "Resident name must be at least 2 characters",
              },
              pattern: {
                value:
                  /^[a-zA-Z\s.'-]+$/,
                message:
                  "Resident name contains invalid characters",
              },
            }
          )}
          placeholder="Resident Name"
          className="w-full border p-3 rounded"
        />

        {errors.residentName && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .residentName
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register(
            "caregiverName",
            {
              required:
                "Caregiver name is required",
              minLength: {
                value: 2,
                message:
                  "Caregiver name must be at least 2 characters",
              },
              pattern: {
                value:
                  /^[a-zA-Z\s.'-]+$/,
                message:
                  "Caregiver name contains invalid characters",
              },
            }
          )}
          placeholder="Caregiver Name"
          className="w-full border p-3 rounded"
        />

        {errors.caregiverName && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .caregiverName
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          type="date"
          {...register("date", {
            required:
              "Date is required",
          })}
          className="w-full border p-3 rounded"
        />

        {errors.date && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.date
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          type="time"
          {...register("time", {
            required:
              "Time is required",
          })}
          className="w-full border p-3 rounded"
        />

        {errors.time && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.time
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register(
            "location",
            {
              required:
                "Location is required",
              minLength: {
                value: 2,
                message:
                  "Location must be at least 2 characters",
              },
            }
          )}
          placeholder="Location"
          className="w-full border p-3 rounded"
        />

        {errors.location && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.location
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register("roomNo", {
            required:
              "Room number is required",
          })}
          placeholder="Room Number"
          className="w-full border p-3 rounded"
        />

        {errors.roomNo && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.roomNo
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <select
          {...register(
            "incidentType",
            {
              required:
                "Incident type is required",
            }
          )}
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

        {errors.incidentType && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .incidentType
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register(
            "incidentDescription",
            {
              required:
                "Incident description is required",
              minLength: {
                value: 10,
                message:
                  "Description must be at least 10 characters",
              },
              maxLength: {
                value: 1000,
                message:
                  "Description cannot exceed 1000 characters",
              },
            }
          )}
          placeholder="Incident Description"
          className="w-full border p-3 rounded"
        />

        {errors.incidentDescription && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .incidentDescription
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register(
            "followupNotes",
            {
              maxLength: {
                value: 500,
                message:
                  "Follow-up notes cannot exceed 500 characters",
              },
            }
          )}
          placeholder="Follow Up Notes"
          className="w-full border p-3 rounded"
        />

        {errors.followupNotes && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .followupNotes
                .message as string
            }
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        className={
          !isValid
            ? "opacity-50"
            : ""
        }
      >
        Submit Incident Report
      </Button>
    </form>
  );
};

export default IncidentReportForm;