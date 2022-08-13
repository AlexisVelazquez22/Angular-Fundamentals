import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/passenger-dashboard/models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { PassengerResponse } from '../../response/passenger-response.interface';
import Swal from 'sweetalert2';
import { MatDialog } from "@angular/material/dialog";
import { PassengerDialog } from '../passenger-dialog/passenger-dialog.component';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>

      <div class="passengers">
        <passenger-count
          [items]="passengers">
        </passenger-count>
        <button (click)="openForm()">+ New Passenger</button>
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
    private passengerService: PassengerDashboardService,
    private dialog: MatDialog
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

  openForm() {
    const dialogOptions = this.dialog.open(PassengerDialog);

    dialogOptions.updateSize('245px', '275px');
    dialogOptions.afterClosed().subscribe( () => {
      this.deployList();
    });
  }

}
