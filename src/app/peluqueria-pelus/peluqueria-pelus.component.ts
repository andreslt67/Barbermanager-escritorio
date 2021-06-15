import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../interfaces/establecimiento';
import { PeluqueroBuscador } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente con los peluqueros del establecimiento.
 */
@Component({
  selector: 'app-peluqueria-pelus',
  templateUrl: './peluqueria-pelus.component.html',
  styleUrls: ['./peluqueria-pelus.component.css']
})
export class PeluqueriaPelusComponent implements OnInit {

  /**
 * establecimiento con los datos obtenidos del servicio
 */
  establecimiento: Establecimiento;

  /**
 * Lista de peluqueros del establecimiento.
 */
  peluqueros: Array<PeluqueroBuscador>;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioPeluqueria  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {ServicioPeluquerosService} servicioPeluqueros Servicio inyectado de peluqueros.
 */
  constructor(private servicioPeluqueria: ServicioEstablecimientosService, private servicioAlertas: AlertasService, private servicioPeluqueros: ServicioPeluquerosService) { 
    this.peluqueros = new Array<PeluqueroBuscador>();
  }

  /**
 * Metodo OnInit que se encarga de cargar los datos del establecimiento y la lista de peluqueros al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.servicioPeluqueria.getPeluqueriaRequest().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos de la peluqueria")
      }
      else {
        this.establecimiento = data;
        this.cargarDatosPeluquero(this.establecimiento.idestablecimiento);
      }
    })
  }

  /**
 * Metodo que carga los peluqueros del servicio en la lista.
 * 
 * @param {number} id Id del establecimiento.
 */
  cargarDatosPeluquero(id: number) {
    this.peluqueros.splice(0, this.peluqueros.length);
    this.servicioPeluqueria.getPeluquerosOfEstablecimiento(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener peluqueros")
      }
      else {
        data.resultados.forEach(resultado => this.peluqueros.push(resultado));
      }
    })
  }

  /**
 * Metodo para eliminar peluqueros del establecimiento.
 * 
 * @param {PeluqueroBuscador} pelu Peluquero a eliminar.
 */
  eliminarPeluquero(pelu: PeluqueroBuscador) {
    this.servicioPeluqueros.eliminarPeluquero(pelu.idpeluquero).subscribe(data => {
      this.servicioAlertas.openSnackBar("Peluquero eliminado correctamente")
      this.cargarDatosPeluquero(this.establecimiento.idestablecimiento);
    })
  }

}
