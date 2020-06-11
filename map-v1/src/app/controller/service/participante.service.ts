import { Injectable } from '@angular/core';
import {Participante} from "../model/participante.model";
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private _participante: Participante

  constructor(private  http: HttpClient) { }

  public save() {
     this.http.post<number>('http://localhost:5200/covidProjectApi/participants', this.participante).subscribe(
        data => {
          console.log(this.participante);
          this.participante = null;
       },error => {
          console.log("error");
       }
     );
  }

  get participante(): Participante {
    if (this._participante == null){
      this._participante = new Participante();
    }
    return this._participante;
  }

  set participante(value: Participante) {
    this._participante = value;
  }
}
