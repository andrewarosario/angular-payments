import { Receipt } from './receipt.model';
import { Observable } from 'rxjs';
import { Payment } from './payment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  public cardUnic : Payment;

  public cards : Payment[] = [
    // valid card
    new Payment('1111111111111111', 789, '01/18', null, null),
    //invalid card
    new Payment('4111111111111234', 123, '01/20', null, null),
  ];

  constructor(private http: HttpClient) { }

  read() : Payment[] {
    return this.cards;

  }

  create(card: Payment): Observable<Receipt>{
    if(card.card_number == '1111111111111111'){
      return this.http.post<Receipt>(this.baseUrl, card);
    }else{
      return this.http.post<Receipt>(this.baseUrl, card);
    }

    //console.log(card);
    //return this.http.post<Receipt>(this.baseUrl, card);
  }

}
