import { Injectable } from "@angular/core";
import { CardMenu } from "../models/menu-card.model";

@Injectable({
    providedIn: "root"
})
export class CardMenuService {
    cardMenu: CardMenu[] = [
        {
            id: 1,
            type: "starter",
            title: "Fricassée d'escargot",
            description: "Aux piment d'Espelette",
            price: 25
        }, 
        {
            id: 1,
            type : "starter",
            title :"Foie gras de canard mi-cuit",
            description: "Et ses copeaux de truffe noire",
            price : 35
        },
        {
            id: 1,
            type : "starter",
            title :"Oeuf au plat",
            description: "Assaisonné à la truffe sur lit de caviar",
            price : 20
        },
        {
            id: 1,
            type : "main-course",
            title :"Filet de boeuf aux herbes",
            description: "Accompagné de sa ribambelle de légumes",
            price : 40
        },
        {
            id: 1,
            type : "main-course",
            title :"Parmentier de queue de boeuf",
            description: "À la truffe noire sur sa purée de panais",
            price : 35
        },
        {
            id: 1,
            type : "main-course",
            title :"Filet de turbot",
            description: "Aux agrumes",
            price : 44
        },
        {
            id: 1,
            type : "main-course",
            title :"Filet de boeuf aux herbes",
            description: "Accompagné de sa ribambelle de légumes",
            price : 40
        },
        {
            id: 1,
            type : "dessert",
            title :"Paris-Brest",
            description: "Revisité",
            price : 18
        },
        {
            id: 1,
            type : "dessert",
            title :"Macaron au chocolat d'exception",
            description: "Et glace à la vanille de Madagascar",
            price : 22
        },
        {
            id: 1,
            type : "dessert",
            title :"Mousse au chocolat",
            description: "Au piment d'Espelette et à la truffe noire",
            price : 23
        },
        {
            id: 2,
            type : "starter",
            title :"Ravioles de foie gras",
            description: "Accompagnés de leur crème à la truffe",
            price : 25
        },
        {
            id: 2,
            type : "starter",
            title :"Caviar osciètre",
            description: "Sur blini à la farine de blé noir",
            price : 35
        },
        {
            id: 2,
            type : "starter",
            title :"Homard et espuma de potiron",
            description: "Mariné aux zestes d'orange",
            price : 20
        },
        {
            id: 2,
            type : "starter",
            title :"Foie gras de canard cuit entier",
            description: "Confiture de figue et pain toasté",
            price : 35
        },
        {
            id: 2,
            type : "main-course",
            title :"Noix de coquilles Saint-Jacques",
            description: "Sur lit de purée de céleri-rave",
            price : 40
        },
        {
            id: 2,
            type : "main-course",
            title :"Langoustine poêlée",
            description: "Purée de patate douce",
            price : 35
        },
        {
            id: 2,
            type : "main-course",
            title :"Mijoté de queue de boeuf",
            description: "Et riz sauvage aux zestes de citron",
            price : 44
        },
        {
            id: 2,
            type : "dessert",
            title :"Macaron noisette et chocolat",
            description: "Glace au caramel brun et sel de Guérande",
            price : 18
        },
        {
            id: 2,
            type : "dessert",
            title :"Baba au rhum revisité",
            description: "Avec son coulis de citron",
            price : 22
        },
        {
            id: 2,
            type : "dessert",
            title :"Tarte au citron meringuée",
            description: "Déstructurée",
            price : 23
        },
        {
            id: 3,
            type : "starter",
            title :"Tartare de poulpe acidulé",
            description: "Aux zest d'orange",
            price : 25
        },
        {
            id: 3,
            type : "starter",
            title :"Velouté de légumes d'antan",
            description: "Carotte, panais, topinambour",
            price : 35
        },
        {
            id: 3,
            type : "starter",
            title :"Soupe à l'oignon",
            description: "Revisitée",
            price : 20
        },
        {
            id: 3,
            type : "main-course",
            title :"Coquilles Saint-Jacques",
            description: "Accompagnés d'une purée de panais",
            price : 40
        },
        {
            id: 3,
            type : "main-course",
            title :"Magret de canard",
            description: "Et parmentier de pommes de terres",
            price : 35
        },
        {
            id: 3,
            type : "main-course",
            title :"Pigeonneau d'Ille-et-Vilaine",
            description: "Sur son lit de gnocchis aux légumes",
            price : 44
        },
        {
            id: 3,
            type : "dessert",
            title :"Pétales de violettes glacés",
            description: "Et purée de noisettes",
            price : 18
        },
        {
            id: 3,
            type : "dessert",
            title :"Fondant au chocolat",
            description: "Revisité",
            price : 22
        },
        {
            id: 3,
            type : "dessert",
            title :"Millefeuille croustillant",
            description: "Myrtilles et pâte d'amande",
            price : 23
        },
        {
            id: 4,
            type : "starter",
            title :"Tartare de thon",
            description: "Assaisonné au yuzu",
            price : 25
        },
        {
            id: 4,
            type : "starter",
            title :"Bouchée de homard croustillant",
            description: "Et sa farandole de petits légumes",
            price : 35
        },
        {
            id: 4,
            type : "starter",
            title :"Velouté de cèpes",
            description: "Aux truffes",
            price : 20
        },
        {
            id: 4,
            type : "main-course",
            title :"Poulet rôti aux herbes de Provence",
            description: "Et sa crème de truffe",
            price : 40
        },
        {
            id: 4,
            type : "main-course",
            title :"Langouste rôtie",
            description: "Et ses légumes de saison",
            price : 35
        },
        {
            id: 4,
            type : "main-course",
            title :"Côte de boeuf Angus",
            description: "Et sa purée de panais",
            price : 44
        },
        {
            id: 4,
            type : "dessert",
            title :"Farandole de desserts",
            description: "Du chef",
            price : 23
        },
        {
            id: 4,
            type : "dessert",
            title :"Crème brulée",
            description: "Revisitée",
            price : 22
        },
        {
            id: 4,
            type : "dessert",
            title :"Tiramisu",
            description: "À la noisette",
            price : 23
        },
      ];
}