import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { SummaryCardsComponent } from "../../components/summary-cards/summary-cards.component";

@Component({
  selector: "app-user-dashboard",
  imports: [SummaryCardsComponent, MatGridListModule],
  templateUrl: "./user-dashboard.component.html",
  styleUrl: "./user-dashboard.component.scss",
})
export class UserDashboardComponent {}
