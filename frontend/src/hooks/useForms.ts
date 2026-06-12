import { useState } from "react";
import { formService } from "../services/formService";

export const useForms = () => {
  const [loading, setLoading] =
    useState(false);

  const getUserForms = async (
    userId: string | number
  ) => {
    try {
      setLoading(true);

      const response =
        await formService.getUserForms(
          userId
        );

      return response.data;
    } finally {
      setLoading(false);
    }
  };

  return {
    getUserForms,
    loading,
  };
};