import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPeluqueriaComponent } from './inicio-peluqueria/inicio-peluqueria.component';
import { NavPeluqueriaComponent } from './nav-peluqueria/nav-peluqueria.component';
import { NavPeluqueroComponent } from './nav-peluquero/nav-peluquero.component';
import { PrincipalPeluqueriaComponent } from './principal-peluqueria/principal-peluqueria.component';
import { WinAuntenticaPeluComponent } from './win-auntentica-pelu/win-auntentica-pelu.component';
import { WinPeluqueriaComponent } from './win-peluqueria/win-peluqueria.component';
import { WinPeluqueroComponent } from './win-peluquero/win-peluquero.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicioPeluqueria', pathMatch: 'full'},
  {path: 'inicioPeluqueria', component: InicioPeluqueriaComponent},
  {path: 'principalPeluqueria', component: PrincipalPeluqueriaComponent},
  {path: 'winPeluqueriaRegistro', component: WinPeluqueriaComponent},
  {path: 'winPeluqueroRegistro', component: WinPeluqueroComponent},
  {path: 'winPeluqueroAuntentica', component: WinAuntenticaPeluComponent},
  {path: 'navPeluqueria', component: NavPeluqueriaComponent},
  {path: 'navPeluquero', component: NavPeluqueroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
