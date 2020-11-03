//import { Component, OnInit, EventEmitter } from '@angular/core';
//import { Usuario } from '../usuario.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-inserir',
  templateUrl: './usuario-inserir.component.html',
  styleUrls: ['./usuario-inserir.component.css']
})
export class UsuarioInserirComponent {

  constructor(public usuarioService: UsuarioService) {

  }
  onAdicionarUsuario(form: NgForm) {
    if (form.invalid) return;
    this.usuarioService.adicionarUsuario(
      form.value.nome,
      form.value.sexo,
      form.value.telefone,
      form.value.email,
      form.value.senha
    );
    form.resetForm();
  }

}
