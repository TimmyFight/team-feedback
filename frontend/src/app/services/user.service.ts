import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${environment.apiUrl}/users`;
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  getUserDetails(userId: string) {
    const url = `${environment.apiUrl}/users/${userId}`;
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }
}
