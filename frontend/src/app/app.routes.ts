import { AuthGuard } from "./guards/auth.guard";
import { LoginRedirectGuard } from "./guards/login-redirect.guard";

import { FeedbackPoolComponent } from "./pages/feedback-pool/feedback-pool.component";
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: UserDashboardComponent, canActivate: [AuthGuard] },
  {
    path: "account/login",
    component: LoginComponent,
    canActivate: [LoginRedirectGuard],
  },
  {
    path: "feedback-pool",
    component: FeedbackPoolComponent,
    canActivate: [AuthGuard],
  },
];
