import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente para acceder a la cuenta de un peluquero.
 */
@Component({
  selector: 'app-win-auntentica-pelu',
  templateUrl: './win-auntentica-pelu.component.html',
  styleUrls: ['./win-auntentica-pelu.component.css']
})
export class WinAuntenticaPeluComponent implements OnInit {

  /**
 * Formulario para obtener los datos del peluquero.
 */
  formLogin: FormGroup;

  /**
 * boolean para cambiar el tipo de input del formulario.
 */
  hide: boolean = true;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPeluquero  Servicio inyectado de peluqueros.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private router: Router, private servicioPeluquero: ServicioPeluquerosService, private servicioJWT: AuntenticadorJWTService, private servicioAlertas: AlertasService) {
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  /**
 * Metodo para navegar al componente principal-peluqueria.
 */
  back() {
    this.router.navigate(['/principalPeluqueria']);
  }

  /**
 * Metodo para comprobar que los datos introducidos son correctos y navegar al componente principal-peluqueria y añadir peluquero al establecimiento.
 */
  auntenticarPeluquero() {
    this.servicioPeluquero.ingresarPeluquero(this.formLogin.controls.user.value, this.formLogin.controls.password.value).then(data => {
      if (data.jwt != undefined) {
        this.servicioJWT.almacenaJWTPeluquero(data.jwt);
        this.router.navigate(['/principalPeluqueria']);
        this.servicioAlertas.openSnackBar("Peluquero insertado correctamente")
      }
      else {
        this.servicioAlertas.openSnackBar("Imposible insertar peluquero");
      }
    }).catch(error => { 
        this.servicioAlertas.openSnackBar('Error en acceso al servidor');
    });
  }

}
