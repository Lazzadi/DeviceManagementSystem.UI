import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {

  users: User[] = [
    {
      userID: 1,
      name: 'Adrian Lazarec',
      role: 'Support Associate',
      location: 'Cluj-Napoca'
    },
    {
      userID: 2,
      name: 'dghasdehyghas',
      role: 'Support Associate',
      location: 'Cluj-Napoca'
    },
    {
      userID: 3,
      name: 'agsdsadgasgdagdasg',
      role: 'Support Associate',
      location: 'Cluj-Napoca'
    }
  ];

  

}
