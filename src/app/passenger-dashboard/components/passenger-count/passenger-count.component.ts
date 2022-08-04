import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <div>
        Total passengers: {{ items.length }}
      </div>
      <div>
        Total checked in: {{ checkedInCount() }}/{{ items.length }}
      </div>
      <br>
    </div>
  `
})
export class PassengerCountComponent {

  @Input() // means this is an input binding (data comes from father component (container))
  items: Passenger[];

  checkedInCount(): number {
    if(!this.items) return 0;
    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }

}
