import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) { }

  private listaUsuariosAtualizada = new Subject<Usuario[]>();

  private usuarios: Usuario[] = [];

  getUsuarios(): void {
    this.httpClient.get<{ mensagem: string, usuarios: Usuario[] }>(
      'http://localhost:4000/api/usuarios'
    ).subscribe((dados) => {
      this.usuarios = dados.usuarios
      this.listaUsuariosAtualizada.next([...this.usuarios])
    })
    //return[...this.usuarios]
  }

  adicionarUsuario(nome: string, sexo: string, telefone: string, email: string, senha: string): void {
    const usuario: Usuario = {
      nome: nome,
      sexo: sexo,
      telefone: telefone,
      email: email,
      senha: senha
    };
    this.httpClient.post<{ mensagem: string }>(
      'http://localhost:4000/api/usuarios',
      usuario
    ).subscribe((dados) => {
      console.log(dados.mensagem)
      this.usuarios.push(usuario);
      this.listaUsuariosAtualizada.next([...this.usuarios]);
    })
  }

  getListaDeUsuariosAtualizadaObservable() {
    return this.listaUsuariosAtualizada.asObservable();
  }
}
