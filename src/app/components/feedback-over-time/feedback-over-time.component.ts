import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-feedback-over-time",
  imports: [CommonModule, BaseChartDirective],
  templateUrl: "./feedback-over-time.component.html",
  styleUrl: "./feedback-over-time.component.scss",
})
export class FeedbackOverTimeComponent {
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
      },
    },

    plugins: {
      legend: { display: false },
    },
  };

  public lineChartLabels: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  feedbackOverTimeData: ChartData<"line"> = {
    labels: this.lineChartLabels,
    datasets: [{ data: [5, 1, 2, 3, 4, 4, 2, 2, 2, 1] }],
  };

  public lineChartType: ChartType = "line";
}
