import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeluqueroBuscador } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente de inicio de sesion de peluqueros.
 */
@Component({
  selector: 'app-div-pelu-expansion',
  templateUrl: './div-pelu-expansion.component.html',
  styleUrls: ['./div-pelu-expansion.component.css']
})
export class DivPeluExpansionComponent implements OnInit {

  /**
 * Pelquero obtenido del componente padre.
 */
  @Input("peluquero") peluquero: PeluqueroBuscador;
  /**
 * Formulario para obtener los datos del peluquero.
 */
  formLogin: FormGroup;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPeluquero  Servicio inyectado de peluqueros.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioPeluquero: ServicioPeluquerosService, private servicioJWT: AuntenticadorJWTService, private router: Router, private servicioAlertas: AlertasService) {
    this.formLogin = new FormGroup({
      clave: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  /**
 * Metodo que compruba los datos introducidos en el formulario y navega hacia el componente nav-peluquero si son validos.
 */
  toPeluquero() {
    this.servicioPeluquero.auntenticaPeluquero(this.peluquero.usuario, this.formLogin.controls.clave.value).then(data => {
        if (data.jwt != undefined) {
          this.servicioJWT.almacenaJWTPeluquero(data.jwt);
          this.router.navigate(['/navPeluquero']);
        }
        else {
          this.servicioAlertas.openSnackBar("contraseña incorrecta");
        }
      }).catch(error => { 
        this.servicioAlertas.openSnackBar('Error en acceso al servidor');
      });
  }

}
