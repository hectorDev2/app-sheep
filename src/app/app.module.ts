import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarbersComponent } from './pages/barbers/barbers.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TattoosModule } from './tattoos/tattoos.module';
import { BarberLayoutComponent } from './layout/barber-layout/barber-layout.component';
import { TattoosLayoutComponent } from './layout/tattoos-layout/tattoos-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BarbersComponent,
    SchedulesComponent,
    BarberLayoutComponent,
    TattoosLayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    TattoosModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
