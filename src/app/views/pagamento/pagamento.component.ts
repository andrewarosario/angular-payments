import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToUserCreate(): void{
    this.router.navigate(['/user/create'])
  }

}
