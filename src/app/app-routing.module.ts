import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutWeComponent } from './components/about-we/about-we.component';
import { BarbersComponent } from './pages/barbers/barbers.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { BarberLayoutComponent } from './layout/barber-layout/barber-layout.component';
import { LocalesPageComponent } from './pages/locales-page/locales-page.component';

const routes: Routes = [
  {
    path: '',
    component: BarberLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutWeComponent },
      { path: 'barbers', component: BarbersComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'locales', component: LocalesPageComponent },
    ],
  },
  {
    path: 'tattoos',
    loadChildren: () =>
      import('./tattoos/tattoo-routing.module').then(
        (m) => m.TattooRoutingModule
      ),
  },
  // { path: 'barbers', component: BarbersComponent },
  // { path: 'locality', component: LocalityComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'schedules', component: SchedulesComponent },
  // { path: 'hours', component: MySchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
