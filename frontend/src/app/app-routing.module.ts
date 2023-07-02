import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { OMFInformationComponent } from "./omf-information/omf-information.component";
import { OMFOperationComponent } from "./omf-operation/omf-operation.component";
import { RestaurantCardListComponent } from "./restaurant-card-list/restaurant-card-list.component";
import { OMFHomepageComponent } from "./omf-homepage/omf-homepage.component";
import { ConnexionPageComponent } from "./connexion-page/connexion-page.component";

 const routes: Routes = [
    { path:"", component: OMFHomepageComponent},
    { path: "homepage", component: OMFHomepageComponent },
    { path: "connexion", component: ConnexionPageComponent}
 ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}