interface FormSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const FormSelector = ({
  value,
  onChange,
}: FormSelectorProps) => {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full border rounded-lg p-3 mb-6"
    >
      <option value="health-assessment">
        Health Assessment Form
      </option>

      <option value="incident-report">
        Incident Report Form
      </option>
    </select>
  );
};

export default FormSelector;