import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import Swal from "sweetalert2";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div class="card">
        <span
          class="status"
          [ngClass]=" {
                        'checked-in': detail.checkedIn,
                        'checked-out': !detail.checkedIn
                      } "></span>
        <div *ngIf="editing">
          <input
            type="text"
            [value]="detail.fullname"
            (input)="onNameChange(name.value)"
            #name>
        </div>
        <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
        <div class="date">
          Check-in date:
            {{ detail.checkedIn === true
              ? (detail.checkinDate | date: 'fullDate' | uppercase)
              : 'Not checked yet'
            }}
        </div>
        <div class="children">
            Children: {{ detail.children?.length || 0 }}
        </div>
        <button (click)="toggleEdit()">
          {{ editing ? 'Done' : 'Edit' }}
        </button>
        |
        <button (click)="onRemove()" [disabled]="disableBtn">
          Remove
        </button>

    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {

  disableBtn: boolean = false;
  currentName: string;

  @Input()
  detail: Passenger;
  editing: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: any): void {
      if(changes.detail){
        this.detail = Object.assign({}, changes.detail.currentValue);
      }
  }

  onNameChange(name: string) {
    this.currentName = name;
  }

  toggleEdit() {
    this.disableBtn = true;
    if(this.editing){
      this.showAlert('modified').then((result) => {
        if(result.isConfirmed) {
          this.detail.fullname = this.currentName;
          this.edit.emit(this.detail);
        }
      });
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.showAlert('deleted').then((result) => {
      if (result.isConfirmed) {
        this.remove.emit(this.detail);
      }
    });
  }

  showAlert(action: string): Promise<any> {
    return Swal.fire({
      title: 'Are you sure?',
      text: `This passenger will be ${action} permanently`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#9f72e6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept'
    });
  }



}
