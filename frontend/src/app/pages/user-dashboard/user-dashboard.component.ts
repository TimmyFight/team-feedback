import { Component, inject } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { FeedbackOverTimeComponent } from "../../components/feedback-over-time/feedback-over-time.component";
import { SummaryCardsComponent } from "../../components/summary-cards/summary-cards.component";
import { RadarStatisticsComponent } from "../../components/radar-statistics/radar-statistics.component";
import { RecentFeedbackComponent } from "../../components/recent-feedback/recent-feedback.component";
import { RequestFeedbackComponent } from "../../components/request-feedback/request-feedback.component";

import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-user-dashboard",
  imports: [
    MatGridListModule,
    FeedbackOverTimeComponent,
    SummaryCardsComponent,
    RadarStatisticsComponent,
    RecentFeedbackComponent,
    RequestFeedbackComponent,
  ],
  templateUrl: "./user-dashboard.component.html",
  styleUrl: "./user-dashboard.component.scss",
})
export class UserDashboardComponent {
  ngOnInit(): void {
    this.getUserDetails();
  }

  private userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);

  userFullName: string = "";

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUserDetails() {
    const userId = sessionStorage.getItem("userId") || "";

    this.userService.getUserDetails(userId).subscribe({
      next: (response: any) => {
        this.userFullName = response.data.fullName;
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
