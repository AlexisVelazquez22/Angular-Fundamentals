import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger.interface';
import { Observable } from 'rxjs';

const options = {
  headers: new HttpHeaders({
    'Content-type': 'applications/json'
  }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  url: string = "http://localhost:57500/api/PassengerDashboard";

  constructor(
    private _http: HttpClient
  ) { }

  getPassengers(): Observable<Passenger[]> {
    return this._http.get<Passenger[]>(`${this.url}/all`);
  }

  postPassenger(passenger: Passenger): Observable<Passenger> {
    return this._http.post<Passenger>(`${this.url}`, passenger, options);
  }

  putPassenger(passenger: Passenger, id: number): Observable<Passenger> {
    return this._http.put<Passenger>(`${this.url}/${id}`, passenger, options);
  }

  deletePassenger(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`, options);
  }

}
