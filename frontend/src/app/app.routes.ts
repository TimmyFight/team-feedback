import { FeedbackPoolComponent } from "./pages/feedback-pool/feedback-pool.component";
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";

import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: UserDashboardComponent },
  { path: "feedback-pool", component: FeedbackPoolComponent },
];
