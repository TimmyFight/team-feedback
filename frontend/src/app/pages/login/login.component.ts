import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { merge } from "rxjs";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountService } from "../../services/account.service";

@Component({
  selector: "app-login",
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  private accountService = inject(AccountService);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  readonly emailControl = new FormControl("", [Validators.required]);
  readonly passwordControl = new FormControl("", [Validators.required]);

  readonly loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  emailerrorMessage = signal("");
  passwordErrorMessage = signal("");

  constructor() {
    merge(
      this.emailControl.statusChanges,
      this.emailControl.valueChanges,
      this.passwordControl.statusChanges,
      this.passwordControl.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessages());
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  updateErrorMessages() {
    if (this.emailControl.hasError("required")) {
      this.emailerrorMessage.set("You must enter a value");
    } else {
      this.emailerrorMessage.set("");
    }

    if (this.passwordControl.hasError("required")) {
      this.passwordErrorMessage.set("You must enter a value");
    } else {
      this.passwordErrorMessage.set("");
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.updateErrorMessages();
      return;
    }

    const credentials = {
      email: this.emailControl.value ?? "",
      password: this.passwordControl.value ?? "",
    };
    this.accountService.login(credentials).subscribe({
      next: (response: any) => {
        this.openSnackBar("Login successful", "Close");
        sessionStorage?.setItem("token", response?.data?.token);
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.openSnackBar(`Login failed: ${error.error.error}`, "Close");
      },
    });
  }
}
