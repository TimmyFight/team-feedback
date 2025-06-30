interface RecentFeedback {
  date: string;
  average: number;
  highlight: string;
}

interface UserCredentials {
  email: string;
  password: string;
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
