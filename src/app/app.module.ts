// basic modules (default)
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

// angular modules
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// custom modules
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

// components
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],

})
export class AppModule {}
