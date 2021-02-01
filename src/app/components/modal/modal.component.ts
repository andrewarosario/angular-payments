import { Payment } from './../payment/payment.model';
import { User } from './../user/user.model';
import { Component, OnInit, Input } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  @Input() user: User;
  

  cards: Payment[];
  valuePay = '';
  dataCard: Payment;
  modalReference;

    
  constructor(private modalService: NgbModal, private paymentService: PaymentService) { }
  ngOnInit(){
    this.cards = this.paymentService.read();    
  }

  open(content): void {
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});      
  }  
}
