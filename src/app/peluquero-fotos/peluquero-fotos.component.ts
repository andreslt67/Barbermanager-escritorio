import { Component, Input, OnInit } from '@angular/core';
import { Peluquero } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { Foto } from '../interfaces/foto';
import { ServicioFotoService } from '../servicios/servicio-foto.service';
import { WinSubirFotoComponent } from '../win-subir-foto/win-subir-foto.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogBorrarImgComponent } from '../dialog-borrar-img/dialog-borrar-img.component';

/**
 * Componente con las fotos del peluquero.
 */
@Component({
  selector: 'app-peluquero-fotos',
  templateUrl: './peluquero-fotos.component.html',
  styleUrls: ['./peluquero-fotos.component.css']
})
export class PeluqueroFotosComponent implements OnInit {

  /**
 * Peluquero obtenido del componente padre.
 */
  @Input('peluquero') peluquero: Peluquero;

  /**
 * Lista de fotos del peluquero.
 */
  fotos: Array<Foto>;

/**
 * Metodo constructor de la clase
 *
 * @param {ServicioFotoService} servicioFotos  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {MatDialog} dialog Servicio inyectado para abrir la ventana dialog.
 */
  constructor(private servicioAlertas: AlertasService, private servicioFotos: ServicioFotoService, private dialog: MatDialog) {
    this.fotos = new Array<Foto>();
   }

  /**
 * Metodo OnInit que se encarga de cargar las fotos al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.cargarDatosFotos(this.peluquero.idpeluquero);
  }

  /**
 * Metodo que carga las fotos en la lista.
 * 
 * @param {number} id Id del peluquero.
 */
  cargarDatosFotos(id: number) {
    this.fotos.splice(0, this.fotos.length);
    this.servicioFotos.getFotos(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener fotos del peluquero")
      }
      else {
        data.fotos.forEach(foto => this.fotos.push(foto));
      }
    })
  }

  /**
 * Metodo que llama al componente WinSubirFotoComponent y lo abre como ventana dialog.
 */
  toSubirFotos() {
    const dialogRef = this.dialog.open(WinSubirFotoComponent, {
      data: {
        idpelu: this.peluquero.idpeluquero
      },
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.cargarDatosFotos(this.peluquero.idpeluquero);
      }
      console.log('The dialog was closed');
    });
  }

  /**
 * Metodo que llama al componente DialogBorrarImgComponent y lo abre en modo ventana dialog.
 */
  toBorrarFoto(id: number) {
    const dialogRef = this.dialog.open(DialogBorrarImgComponent, {
      data: {
        idfoto: id
      },
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.cargarDatosFotos(this.peluquero.idpeluquero);
      }
      console.log('The dialog was closed');
    });
  }

}
