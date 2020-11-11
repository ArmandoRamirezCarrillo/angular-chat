import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'roomList', component: RoomlistComponent},
  { path: 'addRoom', component: AddroomComponent},
  { path: 'chatroom/:roomname', component: ChatroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
