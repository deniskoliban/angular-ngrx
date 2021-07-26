import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BorderedNumberComponent } from './bordered-number/bordered-number.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DataState } from './store/strange.reducer';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  const initialState = { data: { first: 1, second: 2 } };
  let store: MockStore<{ data: DataState }>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BorderedNumberComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should provide correct numbers', async(() => {
    store.setState({ data: { first: -1, second: 1 } });
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.firstNumber$.subscribe(n => expect(n).toEqual(-1));
    app.secondNumber$.subscribe(n => expect(n).toEqual(1));
  }));

  it('should provide correct colors', async(() => {
    store.setState({ data: { first: -1, second: 1 } });
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.firstBorderColor$.subscribe(n => expect(n).toEqual('red'));
    app.secondBorderColor$.subscribe(n => expect(n).toEqual('blue'));
  }));
});
