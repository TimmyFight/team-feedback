import { Component, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { FeedbackService } from "../../services/feedback.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-summary-cards",
  imports: [MatCardModule],
  templateUrl: "./summary-cards.component.html",
  styleUrl: "./summary-cards.component.scss",
})
export class SummaryCardsComponent {
  ngOnInit(): void {
    this.getUserFeedbackSummary();
  }

  private feedbackService = inject(FeedbackService);
  private _snackBar = inject(MatSnackBar);

  summaryFeedbackData: SummaryFeedback = {
    average: 0,
    feedbacksRecieved: 0,
    givenFeedbacks: 0,
  };

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUserFeedbackSummary() {
    const userId = sessionStorage.getItem("userId") || "";

    this.feedbackService.getUserFeedbackSummary(userId).subscribe({
      next: (response: any) => {
        this.summaryFeedbackData = response.data;
      },
      error: (error) => {
        this.openSnackBar(
          `Feedback summary failed: ${error?.error?.error}`,
          "Close"
        );
      },
    });
  }
}
