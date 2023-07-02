import { Component, OnInit } from '@angular/core';
import { RestaurantCard } from '../models/restaurant-card.model';
import { RestaurantCardsService } from '../services/restaurant-cards.service';

@Component({
  selector: 'app-restaurant-card-list',
  templateUrl: './restaurant-card-list.component.html',
  styleUrls: ['./restaurant-card-list.component.scss']
})
export class RestaurantCardListComponent implements OnInit{
  restaurantCards!: RestaurantCard[];

  constructor( private restaurantCardsService: RestaurantCardsService){
    
  }

  ngOnInit(): void {
    this.restaurantCards = this.restaurantCardsService.restaurantCards;
  }

}
