import { Component, Input, OnInit } from '@angular/core';
import { Peluquero } from '../interfaces/peluquero';
import { ResenaPelu } from '../interfaces/resena';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioResenasService } from '../servicios/servicio-resenas.service';


/**
 * Componente con las reseñas del peluquero
 */
@Component({
  selector: 'app-peluquero-resenas',
  templateUrl: './peluquero-resenas.component.html',
  styleUrls: ['./peluquero-resenas.component.css']
})
export class PeluqueroResenasComponent implements OnInit {

  
/**
 * Peluquero obtenido del componente padre.
 */
  @Input('peluquero') peluquero: Peluquero;

/**
 * Lista de reseñas del peluquero.
 */
  resenas: Array<ResenaPelu>;

  
/**
 * Metodo constructor de la clase
 *
 * @param {ServicioResenasService} servicioResena  Servicio inyectado de reseñas.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioResena: ServicioResenasService, private servicioAlertas: AlertasService) {
    this.resenas = new Array<ResenaPelu>();
   }

  /**
 * Metodo OnInit que se encarga de cargar las reseñas al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.cargarDatosResenas(this.peluquero.idpeluquero);
  }

  /**
 * Metodo para cargar los datos de las reseñas en la lista.
 * 
 * @param {number} id Id del peluquero.
 */
  cargarDatosResenas(id: number) {
    this.resenas.splice(0, this.resenas.length);
    this.servicioResena.getResenasPelu(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener reseñas del peluquero")
      }
      else {
        data.resenas.forEach(resena => this.resenas.push(resena));
      }
    })
  }

}
