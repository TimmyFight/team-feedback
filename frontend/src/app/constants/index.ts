export interface Question {
  content: string;
  label?: string;
  formControl: string;
  inputType: string;
}

export interface FormStep {
  type: string;
  typeLabel: string;
  questions: Question[];
}

export const formSteps: FormStep[] = [
  {
    type: "detailsFormGroup",
    typeLabel: "Details",
    questions: [
      {
        content: "Who is the addressee of the feedback?",
        label: "Full Name",
        formControl: "userId",
        inputType: "text",
      },
      {
        content: "For which project is the feedback?",
        label: "Project Name",
        formControl: "projectName",
        inputType: "text",
      },
    ],
  },

  {
    type: "communicationFormGroup",
    typeLabel: "Communication",
    questions: [
      {
        content:
          "I feel that communication within our web project team is effective and timely.",
        formControl: "communicationFirst",
        inputType: "radioGroup",
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
        inputType: "radioGroup",
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
        inputType: "radioGroup",
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
        inputType: "radioGroup",
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
        inputType: "radioGroup",
      },
    ],
  },
];
