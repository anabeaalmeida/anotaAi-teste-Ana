import { Injectable } from '@angular/core';
import { Lembrete } from './lembrete.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  constructor(private httpClient: HttpClient) { }

  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  private lembretes: Lembrete[] = [];

  getLembretes(): void {
    this.httpClient.get<{ mensagem: string, lembretes: Lembrete[] }>(
      'http://localhost:4000/api/lembretes'
    ).subscribe((dados) => {
      this.lembretes = dados.lembretes
      this.listaLembretesAtualizada.next([...this.lembretes])
    })
  }

  adicionarLembrete(titulo: string, criadoem: string, prazo: string, descricao: string): void {
    const lembrete: Lembrete = {
      titulo: titulo,
      criadoem: criadoem,
      prazo: prazo,
      descricao: descricao
    };
    this.httpClient.post<{ mensagem: string }>(
      'http://localhost:4000/api/lembretes',
      lembrete
    ).subscribe((dados) => {
      console.log(dados.mensagem)
      this.lembretes.push(lembrete);
      this.listaLembretesAtualizada.next([...this.lembretes]);
    })
  }

  getListaDeLembretesAtualizadaObservable() {
    return this.listaLembretesAtualizada.asObservable();
  }
}
