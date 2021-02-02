import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../../payment/payment.service';
import { Payment } from '../../payment/payment.model';

@Component({
  selector: 'app-transaction-btn',
  templateUrl: './transaction-btn.component.html',
  styleUrls: ['./transaction-btn.component.scss']
})
export class TransactionBtnComponent implements OnInit {

  @Input() valuePay: number;
  @Input() dataCard: string="";
  @Input() cvv: number;
  @Input() expiry_date: string="";
  @Input() destination_user_id: number;
  @Input() closePay: any;

  message : string;

  constructor(private modalService: NgbModal, private paymenteService: PaymentService) { }

  ngOnInit() {
  }

  open(content) {
    this.paymenteService.create(new Payment(this.dataCard, this.cvv,  
      this.expiry_date, this.destination_user_id, this.valuePay,)).subscribe( (response) => {
        if(response.success){
          this.message = 'O pagamento foi concluido com sucesso'
        }else{
          this.message = 'O pagamento com erro'
        }        
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}); 
      });
      this.closePay.close();
  }

}
