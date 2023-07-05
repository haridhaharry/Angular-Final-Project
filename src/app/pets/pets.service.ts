import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  }

  // fetch all pets list
  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${environment.Base_URL}pets`,this.httpOptions)
  }

}
