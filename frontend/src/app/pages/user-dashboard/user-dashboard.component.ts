import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { FeedbackOverTimeComponent } from "../../components/feedback-over-time/feedback-over-time.component";
import { SummaryCardsComponent } from "../../components/summary-cards/summary-cards.component";
import { RadarStatisticsComponent } from "../../components/radar-statistics/radar-statistics.component";
import { RecentFeedbackComponent } from "../../components/recent-feedback/recent-feedback.component";
import { RequestFeedbackComponent } from "../../components/request-feedback/request-feedback.component";

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
export class UserDashboardComponent {}
