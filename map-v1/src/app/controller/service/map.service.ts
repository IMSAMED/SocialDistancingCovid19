import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from "../../../environments/environment";
import * as L from 'leaflet';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private REST_API_SERVER = 'http://localhost:5200/covidProjectApi/participants';
  constructor(private  http: HttpClient) { }

  public getMarkers(){

  }


}
