import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  template: `
    <div class="checked">
        <div>
          Total passengers: {{ items?.length }}
        </div>
          Total checked in: {{ checkedInCount() }}/{{ items?.length }}
    </div>
  `
})
export class PassengerCountComponent {

  @Input()
  items: Passenger[];

  checkedInCount(): number {
    if(!this.items) return 0;
    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }

}
