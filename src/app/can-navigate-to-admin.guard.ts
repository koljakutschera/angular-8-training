import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CanNavigateToAdminGuard implements CanActivate {
  accessGranted = false; // Guards are singletons so we can save state here
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.accessGranted) {
      this.accessGranted = window.confirm(
        "Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?"
      );
    }
    return this.accessGranted;
  }
}
