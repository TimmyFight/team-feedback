interface RecentFeedback {
  date: string;
  average: number;
  highlight: string;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface Feedback {
  userId: string;
  createdAt?: string;
  projectName: string;
  communicationFirst: string;
  contributionBalanceFirst: string;
  opennessFeedbackFirst: string;
  clarityGoalsFirst: string;
  collaborationSupportFirst: string;
}

interface FeedbackRecent {
  createdAt: string;
  average: number;
  highlight: string;
}

interface SummaryFeedback {
  average: number;
  feedbacksRecieved: number;
  givenFeedbacks: number;
}

interface Dataset {
  data: { datasets: [{ data: number[] }] };
}
