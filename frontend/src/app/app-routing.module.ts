import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { OMFInformationComponent } from "./omf-information/omf-information.component";
import { OMFOperationComponent } from "./omf-operation/omf-operation.component";
import { RestaurantCardListComponent } from "./restaurant-card-list/restaurant-card-list.component";
import { OMFHomepageComponent } from "./omf-homepage/omf-homepage.component";
import { ConnexionComponent } from "./connexion/connexion.component";

 const routes: Routes = [
    { path: "", component: OMFHomepageComponent },
    { path:"connexion", component: ConnexionComponent}
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