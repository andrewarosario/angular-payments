import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    id: null,
    name: '',
    img: '',
    username: ''
  }

  constructor(private userService: UserService, 
          private router: Router) { }

  ngOnInit(): void{
    
  }

  createUser() :void{
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Operação executada com sucesso');
      this.router.navigate(['/pagamento']);
    })    
  }

  cancel() :void{
    this.router.navigate(['/pagamento']);
  }

}
