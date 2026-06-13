import type { SubmittedForm } from "../../types/form";

interface Props {
  forms: SubmittedForm[];
}

const SubmittedFormsList = ({
  forms,
}: Props) => {
  if (!forms.length) {
    return (
      <p className="text-gray-500">
        No forms submitted yet.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {forms.map((form) => (
        <div
          key={form._id}
          className="border rounded-lg p-4 bg-gray-50"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold capitalize">
              {form.formType.replace(
                "-",
                " "
              )}
            </h4>

            <span className="text-sm text-gray-500">
              {form.createdAt
              ? new Date(
                  form.createdAt
                ).toLocaleString()
              : "-"}
            </span>
          </div>

          {form.formType === "health-assessment" ? (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Resident:</strong>{" "}
                {form.formData.residentName || "-"}
              </div>

              <div>
                <strong>Caregiver:</strong>{" "}
                {form.formData.caregiverName || "-"}
              </div>

              <div>
                <strong>Age:</strong>{" "}
                {form.formData.age || "-"}
              </div>

              <div>
                <strong>Gender:</strong>{" "}
                {form.formData.gender || "-"}
              </div>

              <div>
                <strong>Room:</strong>{" "}
                {form.formData.roomNo || "-"}
              </div>

              <div>
                <strong>Temperature:</strong>{" "}
                {form.formData.temperature || "-"}
              </div>

              <div>
                <strong>Blood Pressure:</strong>{" "}
                {form.formData.bloodPressure || "-"}
              </div>

              <div>
                <strong>Heart Rate:</strong>{" "}
                {form.formData.heartRate || "-"}
              </div>

              <div>
                <strong>Oxygen Level:</strong>{" "}
                {form.formData.oxygenLevel || "-"}
              </div>

              <div>
                <strong>Respiratory Rate:</strong>{" "}
                {form.formData.respiratoryRate || "-"}
              </div>

              <div className="col-span-2">
                <strong>Notes:</strong>
                <p className="mt-1 break-words whitespace-pre-wrap">
                  {form.formData.caregiverNotes || "-"}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Resident:</strong>{" "}
                {form.formData.residentName || "-"}
              </div>

              <div>
                <strong>Caregiver:</strong>{" "}
                {form.formData.caregiverName || "-"}
              </div>

              <div>
                <strong>Date:</strong>{" "}
                {form.formData.date || "-"}
              </div>

              <div>
                <strong>Time:</strong>{" "}
                {form.formData.time || "-"}
              </div>

              <div>
                <strong>Location:</strong>{" "}
                {form.formData.location || "-"}
              </div>

              <div>
                <strong>Room:</strong>{" "}
                {form.formData.roomNo || "-"}
              </div>

              <div>
                <strong>Incident Type:</strong>{" "}
                {form.formData.incidentType || "-"}
              </div>

              <div className="col-span-2">
                <strong>Description:</strong>
                <p className="mt-1 break-words whitespace-pre-wrap">
                  {form.formData.incidentDescription || "-"}
                </p>
              </div>

              <div className="col-span-2">
                <strong>Follow-up Notes:</strong>
                <p className="mt-1 break-words whitespace-pre-wrap">
                  {form.formData.followupNotes || "-"}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubmittedFormsList;