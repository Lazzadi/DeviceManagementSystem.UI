import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { DevicesListComponent } from './components/devices/devices-list/devices-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },

  {
    path: 'devices',
    component: DevicesListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
