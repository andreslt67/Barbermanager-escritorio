import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CitaPelu } from '../interfaces/cita';
import { Peluquero } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioCitasService } from '../servicios/servicio-citas.service';

/**
 * Componente con las citas de los peluqueros.
 */
@Component({
  selector: 'app-peluquero-citas',
  templateUrl: './peluquero-citas.component.html',
  styleUrls: ['./peluquero-citas.component.css']
})
export class PeluqueroCitasComponent implements OnInit {

  /**
 * peluquero obtenido del componente padre.
 */
  @Input('peluquero') peluquero: Peluquero;

  /**
 * Lista de citas del peluquero.
 */
  citas: Array<CitaPelu>;

  /**
 * Fecha minima para elegir en el datepicker.
 */
  minDate: Date;

  /**
 * Filtro para el datepicker.
 */
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday from being selected.
    return day !== 0;
  }

  
/**
 * Metodo constructor de la clase
 *
 * @param {ServicioCitasService} servicioCitas  Servicio inyectado de citas.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioCitas: ServicioCitasService, private servicioAlertas: AlertasService) { 
    this.citas = Array<CitaPelu>();
    this.minDate = new Date();
  }

  /**
 * Metodo OnInit que se encarga de cargar las citas al estar listos los componentes angular.
 */
  ngOnInit(): void {
    this.cargarDatosCitas();
  }

  /**
 * Metodo que carga datos de las citas y los añade a la lista.
 * 
 */
  cargarDatosCitas() {
    this.citas.splice(0, this.citas.length);
    this.servicioCitas.getCitasPelu().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener citas del peluquero")
      }
      else {
        data.citas.forEach(cita => this.citas.push(cita));
      }
    })
  }

  /**
 * Evento que se llama al elegir una fecha en el calendario.
 * 
 * @param {MatDatepickerInputEvent} event Evento con los datos del input.
 */
  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(`${event.value}`);
    this.citas.splice(0, this.citas.length);
    this.servicioCitas.getCitasPeluFecha(this.peluquero.idpeluquero, event.value).subscribe(data => {
        data.citas.forEach(cita => this.citas.push(cita));
    });
  }

  /**
 * Metodo para eliminar una cita de la bbdd.
 * 
 * @param {number} idcita Id de la cita a eliminar
 */
  cancelarCita(idcita: number) {
    this.servicioCitas.renunciarCita(idcita).subscribe(data => {
      this.servicioAlertas.openSnackBar("Cita cancelada");
      this.cargarDatosCitas();
    });
  }

}
