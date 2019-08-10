import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { ConsumerComponent } from './consumer/consumer.component';
const routes: Routes = [{
  path:'message',
   component: MessageComponent,
}, {
  path:'home',
  component:HomeComponent
}, {
  path:'consumer',
  component:ConsumerComponent
}, { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
