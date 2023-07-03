import { Component, Input, OnInit } from '@angular/core';
import { CardMenu } from '../models/menu-card.model';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input() CardMenu!: CardMenu;
  
  ngOnInit(): void{}
}
