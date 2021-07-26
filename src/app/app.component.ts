import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DataState } from './store/strange.reducer';
import { interval, Observable, Subscription } from 'rxjs';
import { Change, Reset } from './store/strange.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  firstNumber$: Observable<number>;
  secondNumber$: Observable<number>;
  firstBorderColor$: Observable<string>;
  secondBorderColor$: Observable<string>;

  private colorMapper = map((n: number) => n >= 0 ? 'blue' : 'red');
  private intervalSub: Subscription;

  constructor(private store: Store<{ data: DataState }>) {
    this.firstNumber$ = store.pipe(select((state => state.data.first)));
    this.secondNumber$ = store.pipe(select((state => state.data.second)));

    this.firstBorderColor$ = this.firstNumber$.pipe(this.colorMapper);
    this.secondBorderColor$ = this.secondNumber$.pipe(this.colorMapper);

  }

  start() {
    this.intervalSub = interval(1000).subscribe(() => this.store.dispatch(new Change()));
  }

  stop() {
    this.intervalSub.unsubscribe();
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
