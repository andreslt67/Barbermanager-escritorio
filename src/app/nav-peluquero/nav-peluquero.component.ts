import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Peluquero } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Compomnente para la navegacion de las distintas opciones de peluquero
 */
@Component({
  selector: 'app-nav-peluquero',
  templateUrl: './nav-peluquero.component.html',
  styleUrls: ['./nav-peluquero.component.css']
})
export class NavPeluqueroComponent implements OnInit {

  /**
 * Opcion elegida
 */
  opcion: number = 0;

  /**
 * peluquero que contiene todos los datos a mostrar
 */
  peluquero: Peluquero;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPeluquero  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioPeluquero: ServicioPeluquerosService, private servicioAlertas: AlertasService, private router: Router, private servicioJWT: AuntenticadorJWTService) {
    this.servicioPeluquero.getPeluqueroRequest().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos del peluquero")
      }
      else {
        this.peluquero = data;
      }
    })
   }

  ngOnInit(): void {
  }

  /**
 * Metodo para cambiar opcion elegida.
 *
 * @param {number} op  Nueva opcion.
 */
  switchPag(op: number) {
    this.opcion = op;
  }

  /**
 * Metodo que navega hacia el componente principal-peluqueria y elimina el token
 */
  back() {
    this.router.navigate(["/principalPeluqueria"]);
    this.servicioJWT.eliminaJWTPeluquero();
  }

}
