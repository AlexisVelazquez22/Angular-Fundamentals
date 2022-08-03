import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- event binding -->
      <button (click)="handleClick()">
        Rename
      </button>
      <!-- three ways to do it -->
      <input
      type="text"
      [value]="name"
      (input)="handleInput($event)">

      <input
      type="text"
      [ngModel]="name"
      (ngModelChange)="handleChange($event)">

      <!-- recomended (shorter) -->
      <input
      type="text"
      [(ngModel)]="name">

      <div> {{ name }} </div>

    </div>
  `
})
export class AppComponent {

  name: string = 'Alex';

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Succesfully renamed!';
  }

  handleChange(value: string) {
    this.name = value;
  }
}
