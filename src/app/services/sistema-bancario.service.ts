import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemaBancarioService {

  filaComum = [] ;
  filaPrioritaria =[];
  countComum: number = 0;
  countPrioritario: number = 0;
  senha:string;

  constructor() { }
  
  verificaFilas(){
    return "Sem Clientes"
  }

  adicionaCliente(tipoSenha:number){
    if(tipoSenha == 1){
      this.countComum++;
      this.senha = (`CXN-${(this.countComum).toString()}`);
      this.filaComum.push(this.senha) ;
    }
    else if(tipoSenha == 2){
      this.countPrioritario++;
      this.senha = `CXP-${(this.countPrioritario + 1).toString()}`;
      this.filaPrioritaria.push(this.senha);
    } 
  }

  resetar(){
    this.countComum = 0;
    this.countPrioritario = 0;
    this.filaComum = [];
    this.filaPrioritaria = [];
  }

  ultimodaFila(){
    return this.senha;
  }

  chamadaCaixa1(){
    if(this.filaComum.length != 0){
      return this.filaComum.shift();
    }
    else if(this.filaPrioritaria.length != 0){
      return this.filaPrioritaria.shift();
    }
    else{
      return "Sem clientes na fila"
    }
  }

  chamadaCaixa2(){
    if(this.filaPrioritaria.length != 0){
      return this.filaPrioritaria.shift();
    }
    else if(this.filaComum.length != 0){
      return this.filaComum.shift();
    }
    else{
      return "Sem clientes na fila"
    }
  }
}
