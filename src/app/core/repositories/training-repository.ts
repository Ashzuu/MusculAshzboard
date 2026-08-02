import {inject, Injectable} from '@angular/core';
import {Training} from '../models/training.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingRepository {
  private client:HttpClient = inject(HttpClient);

  public getAll(): Observable<Training[]>{
    return this.client.get<Training[]>("/api/trainings/all");
  }

  public getById(id: number): Observable<Training>{
    return this.client.get<Training>(`/api/trainings/${id}`);
  }

  public add(training: Training): Observable<Training>{
    return this.client.post<Training>("/api/trainings/add", training);
  }
}
