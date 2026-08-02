import {Component, OnInit, inject, Signal, signal, WritableSignal} from '@angular/core';
import { BaseLayout } from '@shared/layout/base-layout/base-layout';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TrainingService } from '@shared/services/training.service';
import { Training } from '../../../core/models/training.model';
import {LoadingService} from '@service/loader/loading-service';
import {Skeleton} from 'primeng/skeleton';

@Component({
  selector: 'ashz-training-page',
  standalone: true,
  imports: [
    CommonModule,
    BaseLayout,
    ButtonModule,
    CardModule,
    TagModule,
    Skeleton
  ],
  templateUrl: './training-page.html',
  styleUrl: './training-page.scss',
})
export class TrainingPage implements OnInit {
  private trainings: WritableSignal<Training[]> = signal([]);
  private router: Router = inject(Router);
  private trainingService: TrainingService = inject(TrainingService);
  private loadingService: LoadingService = inject(LoadingService);

  /**
   * Return all trainings available in database
   */
  public get Trainings():Signal<Training[]>{
    return this.trainings;
  }

  /**
   * Return if the application wait any requests or not
   */
  public get IsLoading(): Signal<boolean>{
    return this.loadingService.IsLoading;
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe(data => {
      this.trainings.set(data);
    });
  }

  /**
   * Action made on click on the button "Add Training"
   */
  onClickAddTraining(): void {
    this.router.navigate(['/trainings/add']);
  }
}
