import { useState } from "react";

import FormSelector from "../components/forms/FormSelector";
import HealthAssessmentForm from "../components/forms/HealthAssessmentForm";
import IncidentReportForm from "../components/forms/IncidentReportForm";

import { useUsers } from "../hooks/useUsers";
import { useAppContext } from "../context/AppContext";

import { formService } from "../services/formService";
import toast from "react-hot-toast";

const CareFormsPage = () => {
  const { users } = useUsers();

  const { forms, setForms } =
    useAppContext();

  const [selectedForm,
    setSelectedForm] = useState(
    "health-assessment"
  );

  const submitForm = async (data: any) => {
    try {
      const payload = {
        userId: data.userId,
        formType: selectedForm,
        formData: data,
      };

      const response =
        await formService.createForm(payload);

      setForms([
        ...forms,
        response.data,
      ]);

      toast.success(
        "Form submitted successfully"
      );
      
      setTimeout(()=>{
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to submit form"
      );
    }
  };

  return (
    <div>
      <FormSelector
        value={selectedForm}
        onChange={setSelectedForm}
      />

      {selectedForm ===
      "health-assessment" ? (
        <HealthAssessmentForm
          users={users}
          onSubmit={submitForm}
        />
      ) : (
        <IncidentReportForm
          users={users}
          onSubmit={submitForm}
        />
      )}
    </div>
  );
};

export default CareFormsPage;