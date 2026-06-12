export type FormType =
  | "health-assessment"
  | "incident-report";

export interface SubmittedForm {
  _id?: string;

  userId: string | number;

  formType: FormType;

  formData: Record<string, any>;

  submittedAt: string;
}