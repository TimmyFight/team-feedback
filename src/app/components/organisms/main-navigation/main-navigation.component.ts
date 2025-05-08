import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-main-navigation",
  imports: [RouterModule, MatListModule],
  templateUrl: "./main-navigation.component.html",
  styleUrl: "./main-navigation.component.scss",
})
export class MainNavigationComponent {
  navigationLinks = [
    { name: "User Dashboard", path: "/" },
    { name: "Feedback Pool", path: "/feedback-pool" },
  ];

  constructor() {}
}
