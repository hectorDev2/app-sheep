import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TattoosLayoutComponent } from '../layout/tattoos-layout/tattoos-layout.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: TattoosLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'tienda', component: ShopPageComponent },
      { path: 'contacto', component: ContactPageComponent },
      { path: 'about', component: AboutPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TattooRoutingModule {}
