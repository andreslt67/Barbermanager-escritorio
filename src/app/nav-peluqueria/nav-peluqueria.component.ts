import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente con barra de navegacion para navegar a las distintas opciones de establecimiento.
 */
@Component({
  selector: 'app-nav-peluqueria',
  templateUrl: './nav-peluqueria.component.html',
  styleUrls: ['./nav-peluqueria.component.css']
})
export class NavPeluqueriaComponent implements OnInit {

  /**
 * Opcion elegida
 */
  opcion: number = 0;

  /**
 * Metodo constructor de la clase
 *
 * @param {Router} route Servicio inyectado para la navegacion.
 */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
 * Metodo que cambia la opcion elegida.
 * 
 * @param {number} op Nueva opcion.
 */
  switchPag(op: number) {
    this.opcion = op;
  }

  /**
 * Metodo que navega hacia el componente principal-peluqueria
 */
  back() {
    this.router.navigate(['/principalPeluqueria'])
  }

}
