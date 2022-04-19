import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/models/user";

@Injectable({ providedIn: "root" })
export class AuthUserStore {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  setUser(user: User): void {
    this.userSubject$.next(user);
  }
}
