import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  createFeedback(feedback: Feedback) {
    const url = `${environment.apiUrl}/feedback`;
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(url, feedback, { headers });
  }

  getUserFeedbacks(userId: string) {
    const url = `${environment.apiUrl}/feedback/user/${userId}`;
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  getUserFeedbackSummary(userId: string) {
    const url = `${environment.apiUrl}/feedback/user/${userId}/summary`;
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }
}
