import {Exercise} from './exercise';
import {MuscularGroup} from './muscular-group';

export interface Training {
  id?: number;
  label: string;
  description?: string;
  muscular_groups: MuscularGroup[];
  intensity: number; // 1-10
  estimated_time: number; // in minutes
  exercises: TrainingExercise[];
}

export interface TrainingExercise {
  id?: number;
  exercise: Exercise;
  notes?: string;
  sets: number;
  reps: number;
  weight: number;
}
