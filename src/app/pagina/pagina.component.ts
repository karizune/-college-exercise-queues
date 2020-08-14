import { Component, OnInit } from '@angular/core';

import { SistemaBancarioService } from './../services/sistema-bancario.service'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  senha1:string;
  senha2:string;
  senhaCliente:string;
  ultimaSenha:string;

  constructor(
    private service: SistemaBancarioService
    ) { }
    
    ngOnInit(): void {
    }
    
  adicionaCliente(tiposenha){
    this.service.adicionaCliente(tiposenha);
    this.senhaCliente = this.service.ultimodaFila();
  }

  chamadaCaixa(numeroCaixa:number){
    if(numeroCaixa == 1){
      this.ultimaSenha = this.senha1;
      this.senha1 = this.service.chamadaCaixa1();
    }
    else if(numeroCaixa == 2){
      this.ultimaSenha = this.senha2;
      this.senha2 = this.service.chamadaCaixa2();
    }
  }

  resetar(){
    this.senhaCliente = "";
    this.senha1 = "";
    this.senha2 = "";
    this.ultimaSenha = "";
    this.service.resetar();
  }
}
