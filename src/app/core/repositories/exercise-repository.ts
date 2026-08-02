import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Exercise} from '@models/exercise';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseRepository {
  private client:HttpClient = inject(HttpClient);

  public getAll():Observable<Exercise[]>{
    return this.client.get<Exercise[]>("/api/exercises/all");
  }
}
