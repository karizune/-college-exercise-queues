import { Component, OnInit } from '@angular/core';
import { SistemaBancarioService } from 'src/app/services/sistema-bancario.service';

@Component({
  selector: 'app-lado-caixa',
  templateUrl: './lado-caixa.component.html',
  styleUrls: ['./lado-caixa.component.css']
})
export class LadoCaixaComponent implements OnInit {

  senha1:string;
  senha2:string;
  senhaCliente:string;
  ultimaSenha:string;

  constructor(
    private service: SistemaBancarioService
  ) { }

  ngOnInit(): void {
    this.atualizaUltimoChamado();
  }

  atualizaUltimoChamado(){
    this.ultimaSenha = this.service.ultimaSenha;
  }

  chamadaCaixa(numeroCaixa:number){
    if(numeroCaixa == 1){
      this.senha1 = this.service.chamadaComum();
    }
    else if(numeroCaixa == 2){
      this.senha2 = this.service.chamadaPrioritario();
    }
    this.atualizaUltimoChamado();
  }
  
  resetar(){
    this.senha1 = "";
    this.senha2 = "";
    this.ultimaSenha = "";
    this.service.resetar();
  }

}
