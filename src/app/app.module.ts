import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderPipe} from 'ngx-order-pipe';
import {DndModule} from 'ng2-dnd';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DndModule.forRoot()
  ],
  providers: [FormBuilder, OrderPipe ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
