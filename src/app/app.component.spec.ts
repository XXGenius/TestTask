import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DndModule} from 'ng2-dnd';
import {OrderPipe} from 'ngx-order-pipe';

describe('AppComponent', () => {
  const component = AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        DndModule.forRoot()],
      declarations: [
        AppComponent
      ],
      providers: [OrderPipe],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
