import { Component, OnInit } from '@angular/core';
import { RestaurantCard } from './models/restaurant-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  RestaurantCard1!: RestaurantCard;
  RestaurantCard2!: RestaurantCard;
  RestaurantCard3!: RestaurantCard;
  RestaurantCard4!: RestaurantCard;

  ngOnInit(): void {
    this.RestaurantCard1 = new RestaurantCard("Menu-La-Palette-du-goût.html",
                                              "../../assets/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
                                              "La palette du goût","Ménilmontant",true);
    this.RestaurantCard2 = new RestaurantCard("Menu-La-note-enchantée.html",
                                              "../../assets/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg",
                                              "La note enchantée","Charonne",true);
    this.RestaurantCard3 = new RestaurantCard("Menu-A-la-française.html",
                                              "../../assets/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg",
                                              "À la française","Cité rouge",false);
    this.RestaurantCard4 = new RestaurantCard("Menu-Le-délice-des-sens.html",
                                              "../../assets/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg",
                                              "Le délice des sens","Folie-Méricourt",false);

  }
}
