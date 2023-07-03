import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  constructor(private router: Router){

  }

  ngOnInit(): void{

  }

  onRedirected(): void{
    this.router.navigateByUrl("");
  }
}
