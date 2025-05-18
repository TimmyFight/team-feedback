import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { SummaryCardsComponent } from "../../components/summary-cards/summary-cards.component";
import { RadarStatisticsComponent } from "../../components/radar-statistics/radar-statistics.component";

@Component({
  selector: "app-user-dashboard",
  imports: [MatGridListModule, SummaryCardsComponent, RadarStatisticsComponent],
  templateUrl: "./user-dashboard.component.html",
  styleUrl: "./user-dashboard.component.scss",
})
export class UserDashboardComponent {}
