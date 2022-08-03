import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">

      <h1 [innerHTML]="title"></h1> <!-- one-way data flow syntax -->
      <h1> {{ title }} </h1>
      <input type="text" [value]="name"> <!-- To bind properties use the bracket [] syntax -->
      <div> {{ name }} </div>
      <img [src]="logoUrl">

    </div>
  `
})
export class AppComponent {
  title: string;
  logoUrl: string = './assets/img/logo.jpg';
  name: string = 'Alex';

  constructor(){
    this.title = 'Angular Fundamentals';
  }
}
