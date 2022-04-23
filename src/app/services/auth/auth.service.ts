import { Injectable } from "@angular/core";
import { LoginForm } from "src/app/models/login-form";
import { UserApiService } from "../user-api/user-api.service";
import { map, tap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { Observable } from "rxjs";
import { AuthUserStore } from "src/app/store/auth-user/auth-user.store";
import { Storage } from "src/app/core/storage/storage";
import { AUTH_USER_KEY } from "src/app/models/auth-user-key";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private userApiService: UserApiService,
    private authUserStore: AuthUserStore,
    private storage: Storage
  ) {}

  auth(userData: LoginForm): Observable<User> {
    return this.userApiService.getUser(userData).pipe(
      map((user) => {
        if (user) {
          return user;
        }
        throw new Error("Usuário ou senha inválidos");
      }),
      tap((user) => this.authUserStore.setUser(user)),
      tap((user) => this.saveUserToStorage(user))
    );
  }

  logout(): void {
    this.authUserStore.setUser(null);
    this.storage.setData(AUTH_USER_KEY, null);
  }

  setUserFromStorage(): void {
    const user = this.storage.getData<User>(AUTH_USER_KEY);
    if (user) {
      this.authUserStore.setUser(user);
    }
  }

  private saveUserToStorage(user: User): void {
    this.storage.setData(AUTH_USER_KEY, user);
  }
}
