import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ParticipationmodalComponent } from './participationmodal/participationmodal.component';
import { StatisticComponent } from './statistic/statistic.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AccordionComponent,
    TabsComponent,
    ParticipationmodalComponent,
    StatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ChartsModule,
    GooglePlaceModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
