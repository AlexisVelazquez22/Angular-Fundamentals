import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
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
              ? (detail.checkInDate | date: 'fullDate' | uppercase)
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
        <button (click)="onRemove()">
          Remove
        </button>
        <br><br>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input() // defines an input property. recieves data from father container
  detail: Passenger;
  editing: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onNameChange(name: string) {
    this.detail.fullname = name;
  }

  toggleEdit() {
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail); //return to the father the same type recieved (@Input)
  }

}
