import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../../models/user";

@Injectable({ providedIn: "root" })
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUser(userData: Partial<User>): Observable<User> {
    return this.http
      .get<User[]>(`${environment.urlApi}/account`, {
        params: { ...userData },
      })
      .pipe(map((users) => users[0]));
  }
}
