import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { BorderedNumberComponent } from './bordered-number/bordered-number.component';
import { strangeReducer } from './store/strange.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BorderedNumberComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ data: strangeReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
