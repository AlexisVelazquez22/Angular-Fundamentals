import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">

      <input
        type="text"
        [value]="name"
        (input)="handleChange($event)">

      <div *ngIf="name.length">
        Searching... {{ name }}
      </div>

      <div *ngIf="name.length > 2">
        Searching for longer... {{ name }}
      </div>

      <!-- Long version of ngIf using ng-template-->
      <ng-template [ngIf]="name.length > 2">
        <div>
          Searching for longer... {{ name }}
        </div>
      </ng-template>

    </div>
  `
})
export class AppComponent {

  name: string = '';

  handleChange(event: any) {
    this.name = event.target.value;
  }

}
