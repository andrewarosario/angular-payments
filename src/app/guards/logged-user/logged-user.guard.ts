import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthUserStore } from "src/app/store/auth-user/auth-user.store";

@Injectable({
  providedIn: "root",
})
export class LoggedUserGuard implements CanLoad {
  constructor(private authUserStore: AuthUserStore, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authUserStore.user$.pipe(
      map((user) => !user),
      tap(
        (isNotAuthenticated) =>
          !isNotAuthenticated && this.router.navigateByUrl("home")
      )
    );
  }
}
