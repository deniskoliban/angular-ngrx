import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, Decrease, Increase } from './store/strange.actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  @Effect()
  change$ = this.actions$
    .pipe(
      ofType(ActionTypes.Change),
      switchMap(() => [new Increase(), new Decrease(), new Decrease()])
    );

  constructor(private actions$: Actions) {}
}
