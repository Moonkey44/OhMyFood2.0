import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { RestaurantCardListComponent } from './restaurant-card-list/restaurant-card-list.component';
import { OMFHeaderComponent } from './omf-header/omf-header.component';
import { MainComponent } from './main/main.component';
import { OMFInformationComponent } from './omf-information/omf-information.component';
import { OMFOperationComponent } from './omf-operation/omf-operation.component';
import { OMFRestaurantsComponent } from './omf-restaurants/omf-restaurants.component';
import { OMFFooterComponent } from './omf-footer/omf-footer.component';
import { OMFLoaderComponent } from './omf-loader/omf-loader.component';
import { HeartComponent } from './heart/heart.component'

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    RestaurantCardListComponent,
    OMFHeaderComponent,
    MainComponent,
    OMFInformationComponent,
    OMFOperationComponent,
    OMFRestaurantsComponent,
    OMFFooterComponent,
    OMFLoaderComponent,
    HeartComponent
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
