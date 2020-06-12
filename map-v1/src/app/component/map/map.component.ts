import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {control} from 'leaflet';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private  http: HttpClient) { }
  private REST_API_SERVER = 'http://localhost:5200/covidProjectApi/participants';
  ngOnInit() {
    const myCovidmap = L.map('map').setView([31.6300734, -8.0480077], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(myCovidmap);

  }


}
