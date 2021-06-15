import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';

/**
 * Componente de inicio de la aplicación.
 */
@Component({
  selector: 'app-inicio-peluqueria',
  templateUrl: './inicio-peluqueria.component.html',
  styleUrls: ['./inicio-peluqueria.component.css']
})
export class InicioPeluqueriaComponent implements OnInit {

  /**
 * Formulario para introducir los datos del establecimiento.
 */
  formLogin: FormGroup;
  /**
 * boolean para cambiar el tipo de input del formulario.
 */
  hide = true;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioEstablecimiento  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioEstablecimiento: ServicioEstablecimientosService, private servicioAlertas: AlertasService, private router: Router,
    private servicioJWT: AuntenticadorJWTService) { 
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /**
 * Comprueba los datos introducidos en el formulario y navega al componente principal-peluqueria si son validos.
 */
  acceder() {
    this.servicioEstablecimiento.auntenticaEstablecimiento(this.formLogin.controls.user.value,
      this.formLogin.controls.password.value).then(data => {
        if (data.jwt != undefined) {
          this.servicioJWT.almacenaJWTEstablecimiento(data.jwt);
          this.router.navigate(['/principalPeluqueria']);
        }
        else {
          this.servicioAlertas.openSnackBar("Usuario y/o credencial incorrectos");
        }
      }).catch(error => { 
        this.servicioAlertas.openSnackBar('Error en acceso al servidor');
      });
  }

  /**
 * Navega al componente win-peluqueria-registro.
 */
  toRegistro() {
    this.router.navigate(['/winPeluqueriaRegistro'])
  }

  ngOnInit(): void {
  }

}
