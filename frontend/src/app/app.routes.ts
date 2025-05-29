import { FeedbackPoolComponent } from "./pages/feedback-pool/feedback-pool.component";
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: UserDashboardComponent },
  { path: "account/login", component: LoginComponent },
  { path: "feedback-pool", component: FeedbackPoolComponent },
];
