export class Payment {

    constructor( card_number, cvv, expiry_date, destination_user_id, value){
       this.card_number = card_number; 
       this.cvv = cvv; 
       this.expiry_date = expiry_date;
       this.destination_user_id = destination_user_id;
       this.value = value;
    }
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;
    
}