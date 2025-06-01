import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}

  login(credentials: UserCredentials) {
    const url = `${environment.apiUrl}/auth/sign-in`;
    return this.http.post(url, credentials);
  }
}
