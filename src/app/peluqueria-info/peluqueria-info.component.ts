import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Establecimiento } from '../interfaces/establecimiento';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente con la informacion del establecimiento
 */
@Component({
  selector: 'app-peluqueria-info',
  templateUrl: './peluqueria-info.component.html',
  styleUrls: ['./peluqueria-info.component.css']
})
export class PeluqueriaInfoComponent implements OnInit {

  /**
 * establecimiento con los datos obtenidos del servicio
 */
  peluqueria: Establecimiento;

  /**
 * Formulario para cambiar los datos del establecimiento.
 */
  formLogin: FormGroup;

  /**
 * boolean para cambiar el tipo de input del formulario.
 */
  hide = true;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioPeluqueria  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioPeluqueria: ServicioEstablecimientosService, private servicioAlertas: AlertasService) {
    this.servicioPeluqueria.getPeluqueriaRequest().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos de la peluqueria")
      }
      else {
        this.peluqueria = data;
      }
    })

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
 * Metodo para actualizar los datos del establecimiento.
 */
  updateEstablecimiento() {
    this.servicioPeluqueria.actualizarEstablecimiento(this.formLogin.controls.user.value, this.formLogin.controls.password.value, this.formLogin.controls.direccion.value, this.formLogin.controls.telefono.value, this.formLogin.controls.horaInicio.value, this.formLogin.controls.horaFin.value).subscribe(data => {
      this.servicioAlertas.openSnackBar("Peluquería actualizada correctamente");
  });
  }

}
