import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AccordionComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AccordionComponent,
    FormContactComponent,
  ],
})
export class SharedModule {}
