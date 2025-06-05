import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";

function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp && payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = sessionStorage.getItem("token");
    if (isTokenValid(token)) {
      return true;
    }
    return this.router.parseUrl("/account/login");
  }
}
