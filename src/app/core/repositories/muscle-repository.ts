import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Muscle} from '@models/muscle';
import {MuscularGroup} from '@models/muscular-group';

@Injectable({
  providedIn: 'root'
})
export class MuscleRepository {
  private client:HttpClient = inject(HttpClient);

  public getAll(): Observable<Muscle[]>{
    return this.client.get<Muscle[]>("/api/muscles/all");
  }

  public getAllMuscularGroups(): Observable<MuscularGroup[]>{
    return this.client.get<MuscularGroup[]>("/api/muscles/muscular-group/all");
  }
}
