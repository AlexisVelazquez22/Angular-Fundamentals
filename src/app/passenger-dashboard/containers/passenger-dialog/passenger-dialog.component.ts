import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PassengerResponse } from '../../response/passenger-response.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

const date = new Date();

@Component({
  selector: 'passenger-dialog',
  styleUrls: ['passenger-dialog.component.scss'],
  template: `

    <div class="formDialog">

      <h1 mat-dialog-title> Add Passenger </h1>

      <div mat-dialog-content>

        <mat-form-field color="accent">
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="model.fullname" required>
        </mat-form-field>

        <div>
          <mat-slide-toggle [(ngModel)]="model.checkedIn" (ngModelChange)="handleChange($event)">Check-In</mat-slide-toggle>
        </div>

      </div>

      <div mat-dialog-actions>
        <button mat-raised-button color="accent" (click)="addNewPassenger()">Save</button>
        <button mat-raised-button color="warn" (click)="closeDialog()">Cancel</button>
      </div>

    </div>

  `
})
export class PassengerDialog {

  model: PassengerResponse = { fullname: '', checkedIn: false, checkinDate: null };

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor(
    private _dialogRef: MatDialogRef<PassengerDialog>,
    private _passengerService: PassengerDashboardService,
    private _date: DatePipe
  ) {}

  addNewPassenger() {
    console.log(this.model);
    this._passengerService.postPassenger(this.model).subscribe( () => {
      this._dialogRef.close();
      Swal.fire({
        icon: 'success',
        title: "Done",
        text: 'The passenger has been created',
        showConfirmButton: false,
        timer: 2500
      });
    });
  }

  handleChange(checked: boolean) {
    if(checked) {
      this.model.checkinDate = this._date.transform(Date.now(), 'YYYY-MM-ddThh:mm:SS').toString();
    }
    else{
      this.model.checkinDate = null;
    }
    console.log(this.model);
  }

  closeDialog() {
    this._dialogRef.close();
  }

}
