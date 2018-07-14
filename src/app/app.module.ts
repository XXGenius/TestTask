import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/primeng';
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
  MatRippleModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderPipe} from 'ngx-order-pipe';
import {DndModule} from 'ng2-dnd';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    DndModule.forRoot()
  ],
  providers: [FormBuilder, OrderPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
