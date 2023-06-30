import { Component, OnInit } from '@angular/core';
import { RestaurantCard } from '../models/restaurant-card.model';

@Component({
  selector: 'app-restaurant-card-list',
  templateUrl: './restaurant-card-list.component.html',
  styleUrls: ['./restaurant-card-list.component.scss']
})
export class RestaurantCardListComponent implements OnInit{
  restaurantCards!: RestaurantCard[];

  ngOnInit(): void {
    this.restaurantCards = [
      {
        link: "Menu-La-Palette-du-goût.html",
        img: "../../assets/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
        title: "La palette du goût",
        location: "Ménilmontant",
        newCard: true
      }, 
      {
        link: "Menu-La-note-enchantée.html",
        img : "../../assets/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg",
        title :"La note enchantée",
        location: "Charonne",
        newCard : true
      },
      {
        link: "Menu-A-la-française.html",
        img : "../../assets/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg",
        title: "À la française",
        location :"Cité rouge",
        newCard :false
      },
      {
        link: "Menu-Le-délice-des-sens.html",
        img: "../../assets/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg",
        title: "Le délice des sens",
        location: "Folie-Méricourt",
        newCard: false
      }
    ]
  }

  constructor(){

  }

}
