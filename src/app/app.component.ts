import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderPipe} from 'ngx-order-pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards = [
    {
      'id': 3,
      'flag': null,
      'num': 126, 'invoice': 764543,
      'client': 'ООО Весна',
      'time': '2018-06-30 14:45'
    },
    {
      'id': 2,
      'flag': null,
      'num': 36,
      'invoice': 345321,
      'client': 'ООО Родина',
      'time': '2018-06-28 05:05'
    },
    {
      'id': 1,
      'flag': null,
      'num': 15,
      'invoice': 123324,
      'client': 'ООО Россельмаш',
      'time': '2018-07-11 14:23'
    },
    {
      'id': 0,
      'flag': '',
      'num': 12,
      'invoice': 123321,
      'client': 'ООО Коваль',
      'time': '2018-07-01 12:03'
    },
    {
      'id': 4,
      'flag': null,
      'num': 87,
      'invoice': 543574,
      'client': 'ОАО ТрансМастер',
      'time': '2018-07-07 16:31'
    },
    {
      'id': 5,
      'flag': null,
      'num': 184,
      'invoice': 121375,
      'client': 'ООО Аквасвит',
      'time': '2018-07-11 23:06'
    },
    {
      'id': 6,
      'flag': null,
      'num': 65,
      'invoice': 124,
      'client': 'ООО Мальборо',
      'time': '2018-06-25 03:04'
    },
    {
      'id': 7,
      'flag': null,
      'num': 198,
      'invoice': 413546,
      'client': 'ОАО Голасо',
      'time': '2018-07-14 13:21'
    },
    {
      'id': 8,
      'flag': '',
      'num': 176,
      'invoice': 8913476,
      'client': 'ООО Бумеранг',
      'time': '2018-07-04 03:04'
    }
    ];

  flags = true;
  addForm: FormGroup;
  flagForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private orderPipe: OrderPipe) {
    const memory = localStorage.getItem('cards');
    if (memory) {
      this.cards = JSON.parse(memory);
    } else {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }
  }


  ngOnInit(): void {
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


  delFlag(i: number): void {
    if (confirm('Удалить флаг?')) {
      this.cards[i].flag = '';
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }
  }


  change(i: number): void {
    this.cards[i].flag = this.flagForm.value.flag;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  delete(i: number): void {
    this.cards = this.cards.filter(card => card !== this.cards[i]);
    if (this.cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    } else {
      localStorage.clear();
    }
  }

  flag(): void {
    this.flags = !this.flags;
  }

  updateData(): void {
    const memory = localStorage.getItem('cards');
    this.cards = JSON.parse(memory);
  }

  createCard(): void {
    this.cards = this.cards || [];
    const time = this.addForm.value.time.replace('T', ' ');
    this.addForm.value.time = time;
    this.addForm.value.id = this.cards.length;
    this.cards.push(this.addForm.value);
    localStorage.setItem('cards', JSON.stringify(this.cards));
    this.addForm.reset();
  }

  order(arg: string): void {
    this.cards = this.orderPipe.transform(this.cards, arg);
  }


}
