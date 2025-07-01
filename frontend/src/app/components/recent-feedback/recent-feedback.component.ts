import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { FeedbackService } from "../../services/feedback.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-recent-feedback",
  imports: [CommonModule, MatTableModule],
  templateUrl: "./recent-feedback.component.html",
  styleUrl: "./recent-feedback.component.scss",
})
export class RecentFeedbackComponent {
  ngOnInit(): void {
    this.getUserFeedbacks();
  }

  private feedbackService = inject(FeedbackService);
  private _snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ["createdAt", "average", "highlight"];
  recentFeedbackData: RecentFeedback[] = [];

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  feedbackAverage(feedback: Feedback) {
    return (
      (parseFloat(feedback?.communicationFirst) +
        parseFloat(feedback?.contributionBalanceFirst) +
        parseFloat(feedback?.opennessFeedbackFirst) +
        parseFloat(feedback?.clarityGoalsFirst) +
        parseFloat(feedback?.collaborationSupportFirst)) /
      5
    );
  }

  feedbackHighlight(feedback: Feedback) {
    const scores = [
      parseFloat(feedback?.communicationFirst),
      parseFloat(feedback?.contributionBalanceFirst),
      parseFloat(feedback?.opennessFeedbackFirst),
      parseFloat(feedback?.clarityGoalsFirst),
      parseFloat(feedback?.collaborationSupportFirst),
    ];

    const maxScore = Math.max(...scores);
    const highlights = [
      "Communication",
      "Contribution Balance",
      "Openness Feedback",
      "Clarity of Goals",
      "Collaboration Support",
    ];
    const index = scores.indexOf(maxScore);

    return highlights[index] || "No Highlight";
  }

  getUserFeedbacks() {
    const userId = sessionStorage.getItem("userId") || "";

    this.feedbackService.getUserFeedbacks(userId).subscribe({
      next: (response: any) => {
        this.recentFeedbackData = response.data.map((feedback: Feedback) => ({
          createdAt:
            feedback?.createdAt &&
            new Date(feedback.createdAt).toLocaleDateString(),
          average: this.feedbackAverage(feedback),
          highlight: this.feedbackHighlight(feedback),
        }));
      },
      error: (error) => {
        this.openSnackBar(`Feedback failed: ${error?.error?.error}`, "Close");
      },
    });
  }
}
