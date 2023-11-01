import { SchedulesComponent } from './components/schedules/schedules.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BarberLayoutComponent } from './layout/barber-layout/barber-layout.component';
import { TattoosLayoutComponent } from './layout/tattoos-layout/tattoos-layout.component';
import { BarbersComponent } from './pages/barbers/barbers.component';
import { TattoosModule } from './tattoos/tattoos.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LocalesPageComponent } from './pages/locales-page/locales-page.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarbersComponent,
    SchedulesComponent,
    BarberLayoutComponent,
    TattoosLayoutComponent,
    LocalesPageComponent,
    HomeComponent,
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
