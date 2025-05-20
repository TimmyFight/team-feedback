import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

const ELEMENT_DATA: RecentFeedback[] = [
  { date: "02/04/2025", average: 4.3, highlight: "Comunication" },
  { date: "12/06/2025", average: 3.2, highlight: "Leadership" },
  { date: "23/06/2025", average: 1.5, highlight: "Teamwork" },
];

@Component({
  selector: "app-recent-feedback",
  imports: [CommonModule, MatTableModule],
  templateUrl: "./recent-feedback.component.html",
  styleUrl: "./recent-feedback.component.scss",
})
export class RecentFeedbackComponent {
  displayedColumns: string[] = ["date", "average", "highlight"];
  recentFeedbackData: RecentFeedback[] = ELEMENT_DATA;
}
