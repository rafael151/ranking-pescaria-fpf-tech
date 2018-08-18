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
  public editando: boolean;

  constructor(private service: PescadorService) { }

  ngOnInit() {
    this.pescador = new Pescador();
    this.ranking = new Array<Pescador>();
    this.editando = false;
    this.carregaRanking();
  }

  public async carregaRanking() {
    try {
      this.ranking = await this.service.ranking();
    } catch (error) {
      console.error(error);
    }
  }

  public async salvarPescador(){
    try {

      if(this.pescador._id){
        await this.service.atualizarPescador(this.pescador);
        this.editando = false;
      }else{
        await this.service.salvarPescador(this.pescador);
      }

      this.pescador = new Pescador();
      this.carregaRanking();
    } catch (error) {
      console.error(error);
    }
  }

  public async editarDados(id:string){
    try {
      let aux = await this.service.buscarPescador(id);
      this.pescador = aux[0];
      this.editando = true;
    } catch (error) {
      console.error(error);
    }
  }

  public cancelarAtualzacao(){
    this.editando = false;
    this.pescador = new Pescador();
  }

}
