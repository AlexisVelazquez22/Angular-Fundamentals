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

      <input
      type="text"
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">

      <div> {{ name }} </div>

    </div>
  `
})
export class AppComponent {

  name: string = 'Alex';

  handleClick() {
    this.name = 'Succesfully renamed!';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {  // event "blur" triggers when lost focus

    this.name = 'Lost focus';
  }

}
