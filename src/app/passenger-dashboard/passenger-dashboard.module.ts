import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// angular material
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from "@angular/material/form-field";

// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

// components (dumb)
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerDialog } from "./containers/passenger-dialog/passenger-dialog.component";

// services
import { PassengerDashboardService } from "./services/passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerDialog
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [
    PassengerDashboardService,
    DatePipe
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule {}
