import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pescador } from '../models/pescador';

@Injectable({
  providedIn: 'root'
})
export class PescadorService {

  private url;

  constructor(private httpClient: HttpClient) {
    this.url = environment.api_url;
  }

  public ranking(){
    return this.httpClient.get<Pescador[]>(this.url + '/ranking').toPromise();
  }

  public salvarPescador(pescador: Pescador) {
    return this.httpClient.post(this.url + '/pescador', pescador, { responseType: 'text' }).toPromise();
  }

  public atualizarPescador(pescador: Pescador) {
    return this.httpClient.put(this.url + '/pescador/' + pescador._id , pescador, { responseType: 'text' }).toPromise();
  }

  public buscarPescador(id: string){
    return this.httpClient.get<Pescador>(this.url + '/pescador/' + id).toPromise();
  }

  public excluir(id: string) {
    return this.httpClient.delete(this.url + '/pescador/' + id, { responseType: 'text' }).toPromise();
  }


}
