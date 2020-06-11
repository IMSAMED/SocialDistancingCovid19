import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Participante} from "../controller/model/participante.model";
import {ParticipanteService} from "../controller/service/participante.service";

@Component({
  selector: 'app-participationmodal',
  templateUrl: './participationmodal.component.html',
  styleUrls: ['./participationmodal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ParticipationmodalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private participanteService: ParticipanteService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  public save() {
   this.participanteService.save();
  }

  get participante(): Participante {
    return this.participanteService.participante;
  }

  open(content) {
    this.modalService.open(content);
  }
}
