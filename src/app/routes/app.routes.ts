import { Routes } from '@angular/router';
import {principalRoutes} from "./principal.routes";
import {exerciseRoutes} from "./exercise.routes";
import {trainingRoutes} from "./training.routes";

export const routes: Routes = [
  ...principalRoutes,
  ...exerciseRoutes,
  ...trainingRoutes
];
