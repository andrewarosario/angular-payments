import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthUserStore } from "../../store/auth-user/auth-user.store";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authUserStore: AuthUserStore, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.authUserStore.user$.pipe(
      map((user) => Boolean(user)),
      tap(
        (isAuthenticated) =>
          !isAuthenticated && this.router.navigateByUrl("login")
      )
    );
  }
}
