import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Peluquero } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente con los datos del peluquero.
 */
@Component({
  selector: 'app-peluquero-info',
  templateUrl: './peluquero-info.component.html',
  styleUrls: ['./peluquero-info.component.css']
})
export class PeluqueroInfoComponent implements OnInit {

  /**
 * Peluquero obtenido del componente padre.
 */
  @Input('peluquero') peluquero: Peluquero;

  /**
 * Formulario para cambiar los datos del peluquero.
 */
  formLogin: FormGroup;

  /**
 * boolean para cambiar el tipo de input del formulario.
 */
  hide = true;

/**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPeluqueros  Servicio inyectado de peluqueros.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioPeluqueros: ServicioPeluquerosService, private servicioAlertas: AlertasService) {
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  
/**
 * Metodo para actualizar los datos del peluquero.
 */
  updatePeluquero() {
    this.servicioPeluqueros.actualizarPeluquero(this.formLogin.controls.user.value, this.formLogin.controls.password.value, this.formLogin.controls.email.value, this.formLogin.controls.name.value).subscribe(data => {
      this.servicioAlertas.openSnackBar("Datos actualizados correctamente");
    })
  }

}
