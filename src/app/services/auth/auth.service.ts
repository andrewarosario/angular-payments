import { Injectable } from "@angular/core";
import { LoginForm } from "src/app/models/login-form";
import { UserApiService } from "../user-api/user-api.service";
import { map } from "rxjs/operators";
import { User } from "src/app/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private userApiService: UserApiService) {}

  auth(userData: LoginForm): Observable<User> {
    return this.userApiService.getUser(userData).pipe(
      map((user) => {
        if (user) {
          return user;
        }
        throw new Error("Usuário ou senha inválidos");
      })
    );
  }
}
