import { Component, OnInit } from '@angular/core';

import { SistemaBancarioService } from './../../services/sistema-bancario.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  senhaCliente:string;
  ultimaSenha:string;

  constructor(
    private service: SistemaBancarioService
  ) { }

  ngOnInit(): void {
    this.atualizaUltimoChamado();
  }

  adicionaCliente(tiposenha){
    this.service.adicionaCliente(tiposenha);
    this.senhaCliente = this.service.ultimodaFila();
  }

  atualizaUltimoChamado(){
    this.ultimaSenha = this.service.ultimaSenha;
  }

}
