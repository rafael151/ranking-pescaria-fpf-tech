import { Component, OnInit } from '@angular/core';
import { PescadorService } from '../services/pescador.service';
import { Pescador } from '../models/pescador';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public ranking: Pescador[];
  public pescador: Pescador;
  public editando: boolean[];

  constructor(private service: PescadorService) {}

  ngOnInit() {
    this.pescador = new Pescador();
    this.ranking = new Array<Pescador>();
    this.editando = new Array<boolean>();
    this.carregaRanking();
  }

  public async carregaRanking() {
    try {
      this.ranking = await this.service.ranking();
      this.ranking = this.ranking.reverse();
      console.log(this.ranking);

      console.log(this.ranking);
    } catch (error) {
      console.error(error);
    }
  }

  public async salvarPescador() {
    try {
      await this.service.salvarPescador(this.pescador);
      this.pescador = new Pescador();
      this.carregaRanking();
    } catch (error) {
      console.error(error);
    }
  }

  public editar(pescador: Pescador, index: number): void {
    this.service.atualizarPescador(pescador);
    this.editando[index] = false;
  }

  public abrirEdicao(index: number) {
    this.editando[index] = true;
  }

  public cancelarEdicao(index: number) {
    this.editando[index] = false;
  }

  public excluir( id: string): void {
    this.service.excluir(id)
      .then(() => {
        this.carregaRanking();
      });
  }
}
