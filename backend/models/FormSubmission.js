const mongoose = require("mongoose");

const formSubmissionSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      formType: {
        type: String,
        enum: [
          "health-assessment",
          "incident-report",
        ],
        required: true,
      },

      formData: {
        type: Object,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "FormSubmission",
  formSubmissionSchema
);