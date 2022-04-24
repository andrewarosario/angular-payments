import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Payment } from "src/app/models/payment";
import { Params } from "src/app/shared/list-data/models/search-params";
import { ListDataApi } from "src/app/shared/list-data/interfaces/list-data-api.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PaymentApiService implements ListDataApi<Payment> {
  private readonly baseURL = "tasks";

  constructor(private http: HttpClient) {}

  list(params: Params): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${environment.urlApi}/${this.baseURL}`, {
      params,
    });
  }

  getCount(params: Params): Observable<number> {
    return this.http
      .get<Payment[]>(`${environment.urlApi}/${this.baseURL}`, {
        params,
      })
      .pipe(map((payments) => payments.length));
  }

  create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(
      `${environment.urlApi}/${this.baseURL}`,
      payment
    );
  }

  update(id: number, payment: Partial<Payment>): Observable<Payment> {
    return this.http.patch<Payment>(
      `${environment.urlApi}/${this.baseURL}/${id}`,
      payment
    );
  }

  delete(id: number): Observable<Object> {
    return this.http.delete<Object>(
      `${environment.urlApi}/${this.baseURL}/${id}`
    );
  }
}
