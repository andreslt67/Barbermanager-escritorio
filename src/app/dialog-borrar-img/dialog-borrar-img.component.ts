import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioFotoService } from '../servicios/servicio-foto.service';

/**
 * Interface con datos enviados al dialog
 */
export interface DialogDataFoto {
  idfoto: number
}

/**
 * componente dialog para confirmar el borrado de fotos
 */
@Component({
  selector: 'app-dialog-borrar-img',
  templateUrl: './dialog-borrar-img.component.html',
  styleUrls: ['./dialog-borrar-img.component.css']
})
export class DialogBorrarImgComponent implements OnInit {

  
/**
 * Metodo constructor de la clase
 *
 * @param {ServicioFotoService} servicioFotos  Servicio inyectado de fotos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {MatDialogRef} dialogRef Servicio inyectado que hace referencia a la ventana dialog.
 * @param {DialogDataFoto} data Datos pasados al componente de la ventana dialog.
 */
  constructor(public dialogRef: MatDialogRef<DialogBorrarImgComponent>, private servicioFotos: ServicioFotoService, private servicioAlertas: AlertasService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataFoto) { }

  ngOnInit(): void {
  }

/**
 * Metodo para cerrar la ventana dialog.
 */
  onNoClick() {
    this.dialogRef.close(false);
  }

/**
 * Metodo para borrar una foto pasada al componente dialog.
 */
  borrarFoto() {
    this.servicioFotos.borrarFoto(this.data.idfoto).subscribe(data => {
      this.servicioAlertas.openSnackBar("Foto borrada correctamente");
    })
    this.dialogRef.close(true);
  }

}
