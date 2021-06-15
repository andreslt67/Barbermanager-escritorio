import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Establecimiento } from '../interfaces/establecimiento';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente para registrar peluqueros.
 */
@Component({
  selector: 'app-win-peluquero',
  templateUrl: './win-peluquero.component.html',
  styleUrls: ['./win-peluquero.component.css']
})
export class WinPeluqueroComponent implements OnInit {

  /**
 * Formulario para obtener los datos del peluquero.
 */
  formLogin: FormGroup;

  /**
 * boolean para indicar el tipo de input del formulario.
 */
  hide: boolean = true;

  /**
 * establecimiento con los datos obtenidos del servicio.
 */
  establecimiento: Establecimiento

  /**
 * boolean para indicar si las contraseñas del formulario coinciden.
 */
  valid: boolean = true;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioPelu  Servicio inyectado de establecimientos.
 * @param {ServicioPeluquerosService} servicioPeluquero Servicio inyectado de peluqueros.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 */
  constructor(private router: Router, private servicioAlertas: AlertasService,
    private servicioPeluquero: ServicioPeluquerosService, private servicioEstablecimiento: ServicioEstablecimientosService) {
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required)
    });
   }

/**
 * Metodo OnInit que se encarga de cargar el establecimiento al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.servicioEstablecimiento.getPeluqueriaRequest().subscribe(data => {
      this.establecimiento = data;
    })
  }

  /**
 * Metodo para navegar al componente principal-peluqueria.
 */
  back() {
    this.router.navigate(['/principalPeluqueria']);
  }

  /**
 * Metodo para registrar peluqueros en la base de datos.
 */
  registrarPeluquero() {
    if (this.formLogin.controls.password.value != this.formLogin.controls.passwordRepeat.value) {
      this.valid = false;
    }
    else {
      this.valid = true;
      this.servicioPeluquero.registrarPeluquero(this.formLogin.controls.user.value, this.formLogin.controls.password.value, this.formLogin.controls.email.value, this.formLogin.controls.nombre.value, this.establecimiento.direccion).then(data => {
          this.router.navigate(['/inicioPeluqueria']);
          this.servicioAlertas.openSnackBar("Peluquero registrado correctamente")
      }).catch(error => { 
          this.servicioAlertas.openSnackBar('Error en acceso al servidor');
      });
    }
  }

}
