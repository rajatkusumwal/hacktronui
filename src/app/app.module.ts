import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueComponent } from './queue/queue.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { ConsumerComponent } from './consumer/consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    MessageComponent,
    HomeComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
