import { Component, inject } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { SignOutComponent } from "../sign-out/sign-out.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
  imports: [
    CommonModule,
    RouterModule,
    SignOutComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ],
})
export class NavigationComponent {
  navigationLinks = [
    { name: "User Dashboard", path: "/" },
    { name: "Give your feedback", path: "/feedback-pool" },
  ];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
