import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socios } from './classes/socios';
@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Socios[]>('https://klk-api.herokuapp.com/socios');
  }
}
