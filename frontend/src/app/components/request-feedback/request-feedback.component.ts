import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from "@angular/core";
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
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-request-feedback",
  imports: [
    CommonModule,
    MatAutocompleteModule,
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
  ngOnInit(): void {
    this.getUsers();

    this.filteredUsers = this.fullNameControl.valueChanges.pipe(
      startWith(""),
      map((value) => {
        let filterValue = "";
        if (typeof value === "string") {
          filterValue = value;
        } else if (
          typeof value === "object" &&
          value !== null &&
          "_id" in value
        ) {
          // @ts-ignore
          filterValue = value?._id;
        } else {
          filterValue = "";
        }
        return filterValue ? this._filter(filterValue) : this.users.slice();
      })
    );
  }

  displayFn = (userId: string): string => {
    const user = this.users.find((u) => u._id === userId);
    return user ? user.fullName : "";
  };

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.users.filter((user) =>
      user.fullName.toLowerCase().includes(filterValue)
    );
  }

  private userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);

  readonly fullNameControl = new FormControl("", [Validators.required]);
  readonly projectNameControl = new FormControl("", [Validators.required]);

  readonly requestFeedbackForm = new FormGroup({
    fullName: this.fullNameControl,
    projectName: this.projectNameControl,
  });

  fullNamEerrorMessage = signal("");
  projectNameErrorMessage = signal("");

  users: User[] = [];
  filteredUsers!: Observable<User[]>;

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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response.data;
      },
      error: (error) => {
        this.openSnackBar(`Users failed: ${error?.error?.error}`, "Close");
      },
    });
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
