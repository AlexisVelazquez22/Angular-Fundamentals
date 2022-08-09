import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/passenger-dashboard/models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"> <!-- sends the data (passenger[]) to the dumb component -->
      </passenger-count>

      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>

      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
      </passenger-detail>

    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
      this.passengerService.getPassengers().subscribe( response => {
        this.passengers = response;
        console.log(this.passengers);
      });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

}
