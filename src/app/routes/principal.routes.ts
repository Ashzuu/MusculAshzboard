import {Routes} from "@angular/router";
import {HomePage} from "../features/pages/home-page/home-page";

export const principalRoutes:Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: "full",
  }
]