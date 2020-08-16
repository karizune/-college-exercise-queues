import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemaBancarioService {

  filaComum = [] ;
  filaPrioritaria = [];
  countComum: number = 0;
  countPrioritario: number = 0;
  senha:string;
  ultimaSenha:string;

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
      this.senha = `CXP-${(this.countPrioritario).toString()}`;
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

  chamadaComum(){
    if(this.filaComum.length != 0){
      this.ultimaSenha = this.filaComum.shift();
      this.countComum--;
    }
    else if(this.filaPrioritaria.length != 0){
      this.ultimaSenha = this.filaPrioritaria.shift();
      this.countPrioritario--;
    }
    else{
      this.ultimaSenha = "Sem clientes na fila"
    }
    return this.ultimaSenha;
  }

  chamadaPrioritario(){
    if(this.filaPrioritaria.length != 0){
      this.ultimaSenha =  this.filaPrioritaria.shift();
    }
    else if(this.filaComum.length != 0){
      this.ultimaSenha = this.filaComum.shift();
    }
    else{
      this.ultimaSenha = "Sem clientes na fila";
    }
    return this.ultimaSenha;
  }
}
