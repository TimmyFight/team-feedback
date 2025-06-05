import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "../../services/account.service";

@Component({
  selector: "app-sign-out",
  imports: [CommonModule, MatButtonModule],
  templateUrl: "./sign-out.component.html",
  styleUrl: "./sign-out.component.scss",
})
export class SignOutComponent {
  private accountService = inject(AccountService);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  signOut() {
    const token = sessionStorage.getItem("token") || "";

    this.accountService.signOut(token).subscribe({
      next: (response: any) => {
        this.openSnackBar("User signed out successfully", "Close");
        sessionStorage.removeItem("token");
        this.router.navigate(["/account/login"]);
      },
      error: (error) => {
        this.openSnackBar(`Sign out fialed: ${error.error.error}`, "Close");
      },
    });
  }
}
