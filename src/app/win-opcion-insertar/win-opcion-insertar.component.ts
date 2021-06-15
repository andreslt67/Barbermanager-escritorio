import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

/**
 * Componente para elegir la forma de insertar peluquero en establecimiento.
 */
@Component({
  selector: 'app-win-opcion-insertar',
  templateUrl: './win-opcion-insertar.component.html',
  styleUrls: ['./win-opcion-insertar.component.css']
})
export class WinOpcionInsertarComponent implements OnInit {

  /**
 * Metodo constructor de la clase
 *
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {MatDialogRef} dialogRef Servicio inyectado para administrar el dialog actual.
 */
  constructor(private router: Router, public dialogRef: MatDialogRef<WinOpcionInsertarComponent>) { }

  ngOnInit(): void {
  }

  /**
 * Metodo para navegar al dialog win-peluquero-registro.
 */
  toRegistrarPeluquero() {
    this.router.navigate(['/winPeluqueroRegistro'])
    this.dialogRef.close();
  }

  /**
 * Metodo para navegar al dialog win-peluquero-auntentica.
 */
  toAuntenticarPeluquero() {
    this.router.navigate(['/winPeluqueroAuntentica']);
    this.dialogRef.close();
  }


}
