import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
        <span
          class="status"
          [style.backgroundColor]=" detail.checkedIn ? '#2ecc71' : 'red' "></span>
        {{ detail.fullname }}
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
        <br>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input() // defines an input property. recieves data from father container
  detail: Passenger;

  constructor() {}

}
