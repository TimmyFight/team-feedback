import { formSteps, FormStep } from "./../../constants/index";

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
import { FeedbackService } from "../../services/feedback.service";
import { MatSnackBar } from "@angular/material/snack-bar";

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
  private feedbackService = inject(FeedbackService);
  private _snackBar = inject(MatSnackBar);

  formSteps: FormStep[] = formSteps;
  private _formBuilder = inject(FormBuilder);

  defaultFormGroup = this._formBuilder.group({
    default: [""],
  });

  detailsFormGroup = this._formBuilder.group({
    userId: ["", Validators.required],
    projectName: ["", Validators.required],
  });

  communicationFormGroup = this._formBuilder.group({
    communicationFirst: ["", Validators.required],
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getFormGroup(type: string) {
    if (type === "detailsFormGroup") {
      return this.detailsFormGroup;
    }

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

  isAllFormsValid(): boolean {
    return this.formSteps.every((step) => this.getFormGroup(step.type).valid);
  }

  sendFeedback() {
    const feedback: Feedback = {
      userId: this.detailsFormGroup.get("userId")?.value ?? "",
      projectName: this.detailsFormGroup.get("projectName")?.value ?? "",
      communicationFirst:
        this.communicationFormGroup.get("communicationFirst")?.value ?? "",
      contributionBalanceFirst:
        this.contributionBalanceFormGroup.get("contributionBalanceFirst")
          ?.value ?? "",
      opennessFeedbackFirst:
        this.opennessFeedbackFormGroup.get("opennessFeedbackFirst")?.value ??
        "",
      clarityGoalsFirst:
        this.clarityGoalsFormGroup.get("clarityGoalsFirst")?.value ?? "",
      collaborationSupportFirst:
        this.collaborationSupportFormGroup.get("collaborationSupportFirst")
          ?.value ?? "",
    };

    this.feedbackService.createFeedback(feedback).subscribe({
      next: (response: any) => {
        this.openSnackBar("Feedback sent.", "Close");
        this.detailsFormGroup.reset();
        this.communicationFormGroup.reset();
        this.contributionBalanceFormGroup.reset();
        this.opennessFeedbackFormGroup.reset();
        this.clarityGoalsFormGroup.reset();
        this.collaborationSupportFormGroup.reset();
      },
      error: (error) => {
        this.openSnackBar(`Feedback failed: ${error?.error?.error}`, "Close");
      },
    });
  }
}
