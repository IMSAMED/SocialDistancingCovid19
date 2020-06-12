import { Injectable } from '@angular/core';
import {Participante} from "../model/participante.model";
import {HttpClient } from "@angular/common/http";
import { AlertsService } from 'angular-alert-module';
@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private _participante: Participante

  constructor(private  http: HttpClient, private alerts: AlertsService) { }

  public save() {
     this.http.post<number>('http://localhost:5200/covidProjectApi/participants', this.participante).subscribe(
        data => {
          console.log(this.participante);
          this.alerts.setMessage('ajouter dautres places et voir Map!','success');
          this.participante = null;
       },error => {
          console.log("error");
         this.alerts.setMessage('re-entre des valeurs valid','error');
       }
     );
  }

  public validateSave(): boolean{
    return  this.participante.username != null && this.participante.address != null && this.participante.starthour > 0 && this.participante.starthour < this.participante.endhour;
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
