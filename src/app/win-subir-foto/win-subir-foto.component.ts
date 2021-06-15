import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioFotoService } from '../servicios/servicio-foto.service';

/**
 * interfaz con los datos enviados al dialog.
 */
export interface WinDataPelu {
  idpelu: number
}

/**
 * Componente dialog para subir fotos del peluquero.
 */
@Component({
  selector: 'app-win-subir-foto',
  templateUrl: './win-subir-foto.component.html',
  styleUrls: ['./win-subir-foto.component.css']
})
export class WinSubirFotoComponent implements OnInit {

  /**
 * Formulario para obtener los datos de la foto.
 */
  formLogin: FormGroup;

  /**
 * string con la imagen codificada obtenida por el formulario.
 */
  imagen: string;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioFotoService} servicioFotos  Servicio inyectado de fotos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {MatDialogRef} dialogRef Servicio inyectado que adminsitra el propio dialog.
 * @param {WinDataPelu} data Datos obtenidos por el componente para obtener el id peluquero.
 */
  constructor(public dialogRef: MatDialogRef<WinSubirFotoComponent>, private servicioFotos: ServicioFotoService, private servicioAlertas: AlertasService,
    @Inject(MAT_DIALOG_DATA) public data: WinDataPelu) { 
      this.formLogin = new FormGroup({
        img: new FormControl('',Validators.required)
      });
    }

  ngOnInit(): void {
  }

  /**
 * Metodo para cerrar la ventana dialog.
 */
  onNoClick() {
    this.dialogRef.close(false);
  }

  /**
 * Evento que se llama al subir una foto al formulario.
 * 
 * @param {Event} fileInput Datos sobre el evento.
 */
  fileEvent(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];

    if (file.type == "image/jpg" || file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/webp") {
      this.toBase64(fileInput);
    }
    else {
      this.servicioAlertas.openSnackBar("Solo puedes subir imagenes");
      this.formLogin.controls.img.setValue('');
    }
  }

  /**
 * Metodo para codificar la imagen a base64.
 * 
 * @param {any} event Los datos de la imagen
 */
  toBase64(event:any) { //codifica la imagen para enviarla mediande json al backend
    if(event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event:any) => {
                this.imagen = event.target.result.toString().split(',')[1];
                console.log(this.imagen);
            }
            reader.readAsDataURL(event.target.files[0]);
    }
}
  /**
 * Metodo para subir la foto del formulario a la bbdd.
 */
  subirFoto() {
   this.servicioFotos.subirFoto(this.data.idpelu, this.imagen).subscribe(data => {
     this.servicioAlertas.openSnackBar("Foto subida correctamente");
   })
   this.dialogRef.close(true);
  }

}
