import {inject, Injectable} from '@angular/core';
import {TrainingRepository} from '@repository/training-repository';
import {MuscleRepository} from '@repository/muscle-repository';
import {ExerciseRepository} from '@repository/exercise-repository';
import {Training} from '@models/training';
import {MuscularGroup} from '@models/muscular-group';
import {Exercise} from '@models/exercise';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private trainingRepo: TrainingRepository = inject(TrainingRepository);
  private muscleRepo: MuscleRepository = inject(MuscleRepository);
  private exerciseRepo: ExerciseRepository = inject(ExerciseRepository);

  public async getTrainings(): Promise<Training[]> {
    return firstValueFrom(this.trainingRepo.getAll());
  }

  public async getTraining(id: number): Promise<Training> {
    return firstValueFrom(this.trainingRepo.getById(id));
  }

  public async addTraining(training: Training): Promise<Training> {
    return firstValueFrom(this.trainingRepo.add(training));
  }

  public async getMuscularGroups(): Promise<MuscularGroup[]> {
    return firstValueFrom(this.muscleRepo.getAllMuscularGroups());
  }

  public async getExercises(): Promise<Exercise[]> {
    return firstValueFrom(this.exerciseRepo.getAll());
  }
}
