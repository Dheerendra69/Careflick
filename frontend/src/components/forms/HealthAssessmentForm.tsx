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
                value: /[a-zA-Z]/,
                message:
                  "Resident name must contain at least one letter",
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
                value: /[a-zA-Z]/,
                message:
                  "Caregiver name must contain at least one letter",
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
          type="number"
          {...register("age", {
            required:
              "Age is required",
            min: {
              value: 1,
              message:
                "Age must be greater than 0",
            },
            max: {
              value: 120,
              message:
                "Age cannot exceed 120",
            },
          })}
          placeholder="Age"
          className="w-full border p-3 rounded"
        />

        {errors.age && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.age
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <select
          {...register("gender", {
            required:
              "Gender is required",
          })}
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

        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.gender
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
        <input
          type="number"
          step="0.1"
          {...register(
            "temperature",
            {
              required:
                "Temperature is required",
              min: {
                value: 30,
                message:
                  "Temperature is too low",
              },
              max: {
                value: 45,
                message:
                  "Temperature is too high",
              },
            }
          )}
          placeholder="Temperature"
          className="w-full border p-3 rounded"
        />

        {errors.temperature && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .temperature
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          {...register(
            "bloodPressure",
            {
              required:
                "Blood pressure is required",
              pattern: {
                value:
                  /^\d{2,3}\/\d{2,3}$/,
                message:
                  "Use format 120/80",
              },
            }
          )}
          placeholder="Blood Pressure (120/80)"
          className="w-full border p-3 rounded"
        />

        {errors.bloodPressure && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .bloodPressure
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          type="number"
          {...register(
            "heartRate",
            {
              required:
                "Heart rate is required",
              min: {
                value: 30,
                message:
                  "Heart rate is too low",
              },
              max: {
                value: 250,
                message:
                  "Heart rate is too high",
              },
            }
          )}
          placeholder="Heart Rate"
          className="w-full border p-3 rounded"
        />

        {errors.heartRate && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .heartRate
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          type="number"
          {...register(
            "oxygenLevel",
            {
              required:
                "Oxygen level is required",
              min: {
                value: 0,
                message:
                  "Cannot be less than 0",
              },
              max: {
                value: 100,
                message:
                  "Cannot exceed 100",
              },
            }
          )}
          placeholder="Oxygen Level (%)"
          className="w-full border p-3 rounded"
        />

        {errors.oxygenLevel && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .oxygenLevel
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <input
          type="number"
          {...register(
            "respiratoryRate",
            {
              required:
                "Respiratory rate is required",
              min: {
                value: 5,
                message:
                  "Respiratory rate is too low",
              },
              max: {
                value: 60,
                message:
                  "Respiratory rate is too high",
              },
            }
          )}
          placeholder="Respiratory Rate"
          className="w-full border p-3 rounded"
        />

        {errors.respiratoryRate && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .respiratoryRate
                .message as string
            }
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register(
            "caregiverNotes",
            {
              maxLength: {
                value: 500,
                message:
                  "Notes cannot exceed 500 characters",
              },
            }
          )}
          placeholder="Caregiver Notes"
          className="w-full border p-3 rounded"
        />

        {errors.caregiverNotes && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors
                .caregiverNotes
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
        Submit Health Assessment
      </Button>
    </form>
  );
};

export default HealthAssessmentForm;