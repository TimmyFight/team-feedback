import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavigationComponent } from "./components/organisms/navigation/navigation.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "team-feedback";
}
