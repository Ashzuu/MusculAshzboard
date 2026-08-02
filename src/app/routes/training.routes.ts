import {Routes} from '@angular/router';
import {TrainingPage} from '../features/training/training-page/training-page';
import {TrainingAddPage} from '../features/training/training-add-page/training-add-page';

export const trainingRoutes:Routes = [
  {
    path: 'trainings',
    component: TrainingPage,
    pathMatch: "full",
  },
  {
    path: 'trainings/add',
    component: TrainingAddPage,
  }
]
