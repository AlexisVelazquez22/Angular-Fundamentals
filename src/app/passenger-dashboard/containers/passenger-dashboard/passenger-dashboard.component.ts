import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/passenger-dashboard/models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { PassengerResponse } from '../../response/passenger-response.interface';
import Swal from 'sweetalert2';

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
        (remove)="removePassenger($event, 'deleted')"
        (edit)="editPassenger($event)">
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
    this.deployList();
  }

  deployList(): void {
    this.passengerService.getPassengers().subscribe( response => {
      this.passengers = response;
      console.log(this.passengers);
    });
  }

  removePassenger(event: Passenger, action: string) {
    this.passengerService.deletePassenger(event.idPassenger).subscribe( () => {
      this.showAlert(action);
      this.deployList();
    });
  }

  editPassenger(event: Passenger) {

    let passengerResponse: PassengerResponse = {
                                                fullname: event.fullname,
                                                checkedIn: event.checkedIn,
                                                checkinDate: event.checkinDate
                                               };

    console.log(passengerResponse);
    this.passengerService.putPassenger(passengerResponse, event.idPassenger).subscribe( () => {
      this.showAlert('modified');
      this.deployList();
    });
  }

  showAlert(action: string): void {
    Swal.fire({
      icon: 'success',
      title: "Done",
      text: `The passenger has been ${action}`,
      showConfirmButton: false,
      timer: 2500
    });
  }


}
