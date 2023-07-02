import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
  constructor(private router: Router){

  }

  ngOnInit(): void{

  }

  onRedirected(): void{
    this.router.navigateByUrl("homepage");
  }
}
