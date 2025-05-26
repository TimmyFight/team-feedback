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

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-request-feedback",
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./request-feedback.component.html",
  styleUrl: "./request-feedback.component.scss",
})
export class RequestFeedbackComponent {
  readonly fullNameControl = new FormControl("", [Validators.required]);
  readonly projectNameControl = new FormControl("", [Validators.required]);

  readonly requestFeedbackForm = new FormGroup({
    fullName: this.fullNameControl,
    projectName: this.projectNameControl,
  });

  fullNamEerrorMessage = signal("");
  projectNameErrorMessage = signal("");

  constructor() {
    merge(
      this.fullNameControl.statusChanges,
      this.fullNameControl.valueChanges,
      this.projectNameControl.statusChanges,
      this.projectNameControl.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    if (this.fullNameControl.hasError("required")) {
      this.fullNamEerrorMessage.set("You must enter a value");
    } else {
      this.fullNamEerrorMessage.set("");
    }

    if (this.projectNameControl.hasError("required")) {
      this.projectNameErrorMessage.set("You must enter a value");
    } else {
      this.projectNameErrorMessage.set("");
    }
  }

  onSubmit() {
    console.log("Form submitted");
  }
}
