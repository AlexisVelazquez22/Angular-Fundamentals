import { Component } from '@angular/core';
import { Passenger } from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">

      <h3>Airline Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [style.backgroundColor]=" passenger.checkedIn ? '#2ecc71' : 'red' "></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check-in date:
              {{ passenger.checkedIn === true
                 ? (passenger.checkInDate | date: 'fullDate' | uppercase)
                 : 'Not checked yet'
              }}
          </div>
        </li>
      </ul>

    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null
    }
  ];

}
