import {Routes} from "@angular/router";
import {ExercisePage} from "../features/exercise/exercise-page/exercise-page";

export const exerciseRoutes: Routes = [
  {
    path: "exercises",
    component: ExercisePage,
    pathMatch: "full",
  }
];
