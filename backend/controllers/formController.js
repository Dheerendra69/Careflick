const FormSubmission = require(
  "../models/FormSubmission"
);

const getForms = async (
  req,
  res
) => {
  const forms =
    await FormSubmission.find();

  res.json(forms);
};

const getUserForms = async (
  req,
  res
) => {
  const forms =
    await FormSubmission.find({
      userId: req.params.userId,
    });

  res.json(forms);
};

const createForm = async (
  req,
  res
) => {
  const form =
    await FormSubmission.create(
      req.body
    );

  res.status(201).json(form);
};

const deleteForm = async (
  req,
  res
) => {
  await FormSubmission.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "Form deleted successfully",
  });
};

module.exports = {
  getForms,
  getUserForms,
  createForm,
  deleteForm,
};