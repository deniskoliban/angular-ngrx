import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, Subject } from 'rxjs';

import { AppEffects } from './app.effects';
import { Change, Decrease } from './store/strange.actions';
import { skip } from 'rxjs/operators';

describe('AppEffects', () => {
  let actions$: Subject<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('change$', () => {
    it('should call side effects', async(() => {
      actions$ = new ReplaySubject(1);
      actions$.next(new Change());
      effects.change$.pipe(skip(2)).subscribe(action => expect(action).toEqual(new Decrease()));
    }));
  });
});
