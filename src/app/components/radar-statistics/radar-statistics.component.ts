import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, CommonModule } from "@angular/common";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-radar-statistics",
  imports: [CommonModule, BaseChartDirective, MatCardModule],
  templateUrl: "./radar-statistics.component.html",
  styleUrl: "./radar-statistics.component.scss",
})
export class RadarStatisticsComponent {
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

  public radarChartLabels: string[] = [
    "Communication",
    "Contribution Balance",
    "Openness & Feedback",
    "Clarity of Goals",
    "Collaboration & Support",
  ];

  public radarChartData: ChartData<"radar"> = {
    labels: this.radarChartLabels,
    datasets: [{ data: [3, 5, 2, 3, 1] }],
  };
  public radarChartType: ChartType = "radar";
}
