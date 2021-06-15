import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';

/**
 * Componente para registrar peluqueria.
 */
@Component({
  selector: 'app-win-peluqueria',
  templateUrl: './win-peluqueria.component.html',
  styleUrls: ['./win-peluqueria.component.css']
})
export class WinPeluqueriaComponent implements OnInit {

  /**
 * Formulario para obtener los datos de la peluqueria.
 */
  formLogin: FormGroup;

  /**
 * boolean para indicar el tipo de input del formulario.
 */
  hide: boolean = true;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioEstablecimiento  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioEstablecimiento: ServicioEstablecimientosService, private servicioAlertas: AlertasService, private servicioJWT: AuntenticadorJWTService,
    private router: Router) { 
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      horaFin: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  /**
 * Metodo para navegar al componente inicio-peluqueria
 */
  back() {
    this.router.navigate(['/inicioPeluqueria']);
  }

  /**
 * Metodo para registrar un establecimiento en la bbdd.
 */
  registrarPeluqueria() {
    this.servicioEstablecimiento.registrarEstablecimiento(this.formLogin.controls.user.value, this.formLogin.controls.password.value, this.formLogin.controls.direccion.value, this.formLogin.controls.telefono.value, this.formLogin.controls.horaInicio.value, this.formLogin.controls.horaFin.value).then(data => {
      if (data.jwt != undefined) {
        this.servicioJWT.almacenaJWTEstablecimiento(data.jwt);
        this.router.navigate(['/principalPeluqueria']);
        this.servicioAlertas.openSnackBar("Establecimiento registrado correctamente")
      }
      else {
        this.servicioAlertas.openSnackBar("Imposible registrar peluqueria");
      }
    }).catch(error => { 
        this.servicioAlertas.openSnackBar('Error en acceso al servidor');
    });
  }

}
