import { Component, Inject, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

import { FeedbackService } from "../../services/feedback.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-feedback-over-time",
  imports: [CommonModule, BaseChartDirective],
  templateUrl: "./feedback-over-time.component.html",
  styleUrl: "./feedback-over-time.component.scss",
})
export class FeedbackOverTimeComponent {
  ngOnInit(): void {
    this.getUserFeedbackOverTime();
    console.log("Feedback Over Time Data:", this.feedbackOverTimeData);
  }

  private feedbackService = inject(FeedbackService);
  private _snackBar = inject(MatSnackBar);

  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public lineChartOptions: ChartConfiguration["options"] = {
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      y: {
        position: "left",
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },

    plugins: {
      legend: { display: false },
    },
  };

  feedbackOverTimeData: ChartData<"line"> = {
    labels: [],
    datasets: [],
  };

  public lineChartType: ChartType = "line";

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUserFeedbackOverTime() {
    const userId = sessionStorage.getItem("userId") || "";

    this.feedbackService.getUserFeedbackOverTime(userId).subscribe({
      next: (response: any) => {
        this.feedbackOverTimeData = response.data;
      },
      error: (error) => {
        this.openSnackBar(
          `Feedback over time failed: ${error?.error?.error}`,
          "Close"
        );
      },
    });
  }
}
