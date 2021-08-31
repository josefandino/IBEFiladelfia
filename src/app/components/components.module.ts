import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ChurchComponent } from './church/church.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PredicasComponent } from './predicas/predicas.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    WhatsappComponent,
    ChurchComponent,
    CalendarComponent,
    PredicasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    ChurchComponent,
    WhatsappComponent,
  ],
})
export class ComponentsModule { }
