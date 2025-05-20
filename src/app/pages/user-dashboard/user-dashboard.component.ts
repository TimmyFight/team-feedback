import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { SummaryCardsComponent } from "../../components/summary-cards/summary-cards.component";
import { RadarStatisticsComponent } from "../../components/radar-statistics/radar-statistics.component";
import { RecentFeedbackComponent } from "../../components/recent-feedback/recent-feedback.component";

@Component({
  selector: "app-user-dashboard",
  imports: [
    MatGridListModule,
    SummaryCardsComponent,
    RadarStatisticsComponent,
    RecentFeedbackComponent,
  ],
  templateUrl: "./user-dashboard.component.html",
  styleUrl: "./user-dashboard.component.scss",
})
export class UserDashboardComponent {}
