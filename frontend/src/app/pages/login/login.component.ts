import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
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
    console.log("Login form submitted");
  }
}
