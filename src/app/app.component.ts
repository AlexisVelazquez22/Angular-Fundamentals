import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- event binding -->
      <button (click)="handleClick(username.value)">
        Get value
      </button>

      <input type="text" #username>

      <div> {{ name }} </div>

    </div>
  `
})
export class AppComponent {

  name: string = 'Alex';


  handleClick(value: string) {
    console.log(value);
  }


}
