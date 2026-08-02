import { Component, OnInit, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseLayout } from '@shared/layout/base-layout/base-layout';
import { TrainingService } from '@shared/services/training.service';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import {MuscularGroup} from '@models/muscular-group';
import {Exercise} from '@models/exercise';

@Component({
  selector: 'ashz-training-add-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BaseLayout,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    MultiSelectModule,
    SliderModule,
    InputNumberModule,
    SelectModule,
    CardModule
  ],
  templateUrl: './training-add-page.html',
  styleUrl: './training-add-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingAddPage implements OnInit {
  trainingForm!: FormGroup;
  muscularGroups = signal<MuscularGroup[]>([]);
  availableExercises = signal<Exercise[]>([]);

  private fb = inject(FormBuilder);
  private trainingService = inject(TrainingService);
  private router = inject(Router);

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  private initForm(): void {
    this.trainingForm = this.fb.group({
      label: ['', Validators.required],
      description: [''],
      muscular_groups: [[], Validators.required],
      intensity: [5, [Validators.required, Validators.min(1), Validators.max(10)]],
      estimated_time: [60, [Validators.required, Validators.min(1)]],
      exercises: this.fb.array([])
    });
  }

  private loadData(): void {
    this.trainingService.getMuscularGroups().then(groups => {
      this.muscularGroups.set(groups);
    });
    this.trainingService.getExercises().then(exercises => {
      this.availableExercises.set(exercises);
    });
  }

  get exercisesFormArray(): FormArray {
    return this.trainingForm.get('exercises') as FormArray;
  }

  addExercise(): void {
    const exerciseGroup = this.fb.group({
      exercise: [null, Validators.required],
      notes: [''],
      sets: [3, [Validators.required, Validators.min(1)]],
      reps: [10, [Validators.required, Validators.min(1)]],
      weight: [0, [Validators.required, Validators.min(0)]]
    });
    this.exercisesFormArray.push(exerciseGroup);
  }

  removeExercise(index: number): void {
    this.exercisesFormArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.trainingForm.valid) {
      this.trainingService.addTraining(this.trainingForm.value).then(() => {
        this.router.navigate(['/trainings']);
      });
    } else {
      this.trainingForm.markAllAsTouched();
    }
  }

  cancel(): void {
    this.router.navigate(['/trainings']);
  }
}
