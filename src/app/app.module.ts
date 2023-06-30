import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { RestaurantCardListComponent } from './restaurant-card-list/restaurant-card-list.component';
import { OMFHeaderComponent } from './omf-header/omf-header.component'

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    RestaurantCardListComponent,
    OMFHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
