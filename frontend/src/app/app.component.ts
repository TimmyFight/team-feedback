import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavigationComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(public router: Router) {}

  title = "team-feedback";

  shouldShowNavigation(): boolean {
    return !this.router.url.startsWith("/account/");
  }
}
