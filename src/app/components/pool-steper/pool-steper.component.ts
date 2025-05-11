import { formSteps } from "./../../constants/index";

import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
  selector: "app-pool-steper",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./pool-steper.component.html",
  styleUrl: "./pool-steper.component.scss",
})
export class PoolSteperComponent {
  formSteps = formSteps;
  private _formBuilder = inject(FormBuilder);

  defaultFormGroup = this._formBuilder.group({
    default: [""],
  });

  communicationFormGroup = this._formBuilder.group({
    comunicationFirst: ["", Validators.required],
  });

  contributionBalanceFormGroup = this._formBuilder.group({
    contributionBalanceFirst: ["", Validators.required],
  });

  opennessFeedbackFormGroup = this._formBuilder.group({
    opennessFeedbackFirst: ["", Validators.required],
  });

  clarityGoalsFormGroup = this._formBuilder.group({
    clarityGoalsFirst: ["", Validators.required],
  });

  collaborationSupportFormGroup = this._formBuilder.group({
    collaborationSupportFirst: ["", Validators.required],
  });

  getFormGroup(type: string) {
    if (type === "communicationFormGroup") {
      return this.communicationFormGroup;
    }

    if (type === "contributionBalanceFormGroup") {
      return this.contributionBalanceFormGroup;
    }

    if (type === "opennessFeedbackFormGroup") {
      return this.opennessFeedbackFormGroup;
    }

    if (type === "clarityGoalsFormGroup") {
      return this.clarityGoalsFormGroup;
    }

    if (type === "collaborationSupportFormGroup") {
      return this.collaborationSupportFormGroup;
    }
    return this.defaultFormGroup;
  }
}
