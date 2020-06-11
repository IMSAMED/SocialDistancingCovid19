import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: Mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 31.6300734;
  lng = -8.0480077;
  zoom = 12
  constructor() {
    Mapboxgl.accessToken = environment.mapbox.accessToken;
  }
  buildMap() {
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
    this.map.addControl(new Mapboxgl.NavigationControl());
  }
}
