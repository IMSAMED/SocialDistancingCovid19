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
import { AlertsModule } from 'angular-alert-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './component/accordion/accordion.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ParticipationmodalComponent } from './component/participationmodal/participationmodal.component';
import { StatisticComponent } from './component/statistic/statistic.component';
import { MapdataComponent } from './component/mapdata/mapdata.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AccordionComponent,
    TabsComponent,
    ParticipationmodalComponent,
    StatisticComponent,
    MapdataComponent,
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
    FormsModule,
    AlertsModule.forRoot(),
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
