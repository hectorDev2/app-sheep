import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { TattooRoutingModule } from './tattoo-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ShapesBackgroundComponent } from './components/shapes-background/shapes-background.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    GalleryComponent,
    SliderComponent,
    FooterComponent,
    NavbarComponent,
    ContactPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ShapesBackgroundComponent,
  ],
  imports: [CommonModule, SharedModule, TattooRoutingModule, RouterModule],
  exports: [
    HomePageComponent,
    AboutComponent,
    GalleryComponent,
    SliderComponent,
    ContactPageComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class TattoosModule {}
