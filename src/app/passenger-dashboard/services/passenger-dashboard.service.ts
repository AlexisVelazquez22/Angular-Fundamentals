import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger.interface';
import { Observable } from 'rxjs';
import { PassengerResponse } from '../response/passenger-response.interface';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

  postPassenger(passenger: Passenger): Observable<Response> {
    return this._http.post<Response>(`${this.url}`, passenger, options);
  }

  putPassenger(passenger: PassengerResponse, id: number): Observable<Response> {
    return this._http.put<Response>(`${this.url}/${id}`, passenger, options);
  }

  deletePassenger(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`, options);
  }

}
