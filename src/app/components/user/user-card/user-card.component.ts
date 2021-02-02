import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  public currentPage = 1; 

  users : User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }

}
