import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { LadoCaixaComponent } from './containers/lado-caixa/lado-caixa.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lado-caixa', component: LadoCaixaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
