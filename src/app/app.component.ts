import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards: any = [];
  flags = true;
  addForm: FormGroup;
  flagForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private orderPipe: OrderPipe) {
    const memory = localStorage.getItem('cards');
    this.cards = JSON.parse(memory);
  }


  ngOnInit() {
    this.flagForm = this.formBuilder.group({
      flag: null,
    });
    this.addForm = this.formBuilder.group({
      id: [''],
      flag: [''],
      num: ['', Validators.required],
      invoice: ['', Validators.required],
      client: ['', Validators.required],
      time: ['', Validators.required]
    });

  }


  delFlag(i) {
    if (confirm('Удалить флаг?')) {
      console.log(this.cards[i]);
      this.cards[i].flag = '';
      localStorage.setItem( 'cards', JSON.stringify(this.cards));
    }
  }


  change(i): void {
    console.log(this.flagForm.value);
    this.cards[i].flag = this.flagForm.value.flag;
    localStorage.setItem( 'cards', JSON.stringify(this.cards));
  }

  delete(index): void {
    this.cards = this.cards.filter( card => card !== this.cards[index]);
    localStorage.setItem( 'cards', JSON.stringify(this.cards));
  }

  flag(): void {
    console.log(this.flags);
    this.flags = !this.flags;
  }

  updateData(): void {
    const memory = localStorage.getItem('cards');
    this.cards = JSON.parse(memory);
  }

  createCard(): void {
    this.cards = this.cards || [];
    const time =  this.addForm.value.time.replace( 'T', ' ');
    this.addForm.value.time = time;
    this.addForm.value.id = this.cards.length;
    console.log(this.addForm.value.time);
    this.cards.push(this.addForm.value);
    localStorage.setItem( 'cards', JSON.stringify(this.cards));
    this.addForm.reset();
  }

   order(arg): void {
       this.cards = this.orderPipe.transform(this.cards, arg);
  }


}
