import { Component, Inject, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

import { FeedbackService } from "../../services/feedback.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-radar-statistics",
  imports: [CommonModule, BaseChartDirective, MatCardModule],
  templateUrl: "./radar-statistics.component.html",
  styleUrl: "./radar-statistics.component.scss",
})
export class RadarStatisticsComponent {
  ngOnInit(): void {
    this.getUserFeedbackCategorySummary();
  }

  private feedbackService = inject(FeedbackService);
  private _snackBar = inject(MatSnackBar);

  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public radarChartOptions: ChartConfiguration["options"] = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 12,
          },
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  public radarChartData: ChartData<"radar"> = {
    labels: [],
    datasets: [],
  };
  public radarChartType: ChartType = "radar";

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUserFeedbackCategorySummary() {
    const userId = sessionStorage.getItem("userId") || "";

    this.feedbackService.getUserFeedbackCategorySummary(userId).subscribe({
      next: (response: any) => {
        this.radarChartData = response.data;
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
