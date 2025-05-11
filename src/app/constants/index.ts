export const formSteps = [
  {
    type: "communicationFormGroup",
    typeLabel: "Communication",
    questions: [
      {
        content:
          "I feel that communication within our web project team is effective and timely.",
        formControl: "comunicationFirst",
      },
    ],
  },

  {
    type: "contributionBalanceFormGroup",
    typeLabel: "Contribution Balance",
    questions: [
      {
        content:
          "Everyone on the team contributes equally to the project's progress.",
        formControl: "contributionBalanceFirst",
      },
    ],
  },

  {
    type: "opennessFeedbackFormGroup",
    typeLabel: "Openness & Feedback",
    questions: [
      {
        content:
          "I feel comfortable raising concerns or offering suggestions during our project discussions",
        formControl: "opennessFeedbackFirst",
      },
    ],
  },

  {
    type: "clarityGoalsFormGroup",
    typeLabel: "Clarity of Goals",
    questions: [
      {
        content:
          "Our team has a clear understanding of project goals and deadlines",
        formControl: "clarityGoalsFirst",
      },
    ],
  },

  {
    type: "collaborationSupportFormGroup",
    typeLabel: "Collaboration & Support",
    questions: [
      {
        content:
          "I am satisfied with the level of collaboration and support among team members.",
        formControl: "collaborationSupportFirst",
      },
    ],
  },
];
