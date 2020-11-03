//import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { Lembrete } from '../lembrete.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LembreteService } from '../lembrete.service';

@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent {

  constructor(public lembreteService: LembreteService) {

  }

  onAdicionarLembrete(form: NgForm) {
    if (form.invalid) return;
    this.lembreteService.adicionarLembrete(
      form.value.titulo,
      form.value.criadoem,
      form.value.prazo,
      form.value.descricao
    );

    form.resetForm();
  }
}
