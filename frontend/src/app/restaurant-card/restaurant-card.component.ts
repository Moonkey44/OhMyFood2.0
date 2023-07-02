import { Component, OnInit, Input } from '@angular/core';
import { RestaurantCard } from '../models/restaurant-card.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit{
  @Input() RestaurantCard!: RestaurantCard;

  ngOnInit(): void {
  }  
}

