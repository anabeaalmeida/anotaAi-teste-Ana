import { Component } from '@angular/core';
import { Usuario } from './usuarios/usuario.model';
import { Lembrete } from './lembretes/lembrete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios: Usuario[] = [];
  onUsuarioAdicionado(usuario) {
    this.usuarios = [...this.usuarios, usuario];
  }
  onUsuarioLogin(usuario) {
    this.usuarios = [...this.usuarios, usuario];
  }
  lembretes: Lembrete[] = [];
  onLembreteAdicionado(lembrete) {
    this.lembretes = [...this.lembretes, lembrete];
  }
}
