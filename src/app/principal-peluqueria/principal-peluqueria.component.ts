import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Establecimiento } from '../interfaces/establecimiento';
import { PeluqueroBuscador } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';
import { WinOpcionInsertarComponent } from '../win-opcion-insertar/win-opcion-insertar.component';

/**
 * Componente principal de la peluqueria con lista de peluqueros.
 */
@Component({
  selector: 'app-principal-peluqueria',
  templateUrl: './principal-peluqueria.component.html',
  styleUrls: ['./principal-peluqueria.component.css']
})
export class PrincipalPeluqueriaComponent implements OnInit {

  /**
 * establecimiento con los datos obtenidos del servicio.
 */
  establecimiento: Establecimiento;

  /**
 * Lista de peluqueros del establecimiento.
 */
  peluqueros: Array<PeluqueroBuscador>;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioPelu  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioEstablecimiento: ServicioEstablecimientosService, private servicioAlertas: AlertasService, private router: Router,
   private servicioJWT: AuntenticadorJWTService, private dialog: MatDialog) { 
    this.peluqueros = new Array<PeluqueroBuscador>();
  }

  /**
 * Metodo OnInit que se encarga de cargar los establecimientos y la lista de peluqueros al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.servicioEstablecimiento.getPeluqueriaRequest().subscribe(data => {
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
 * Metodo que carga los datos del establecimiento.
 * 
 * @param {number} id Id del establecimiento.
 */
  cargarDatosPeluquero(id: number) {
    this.servicioEstablecimiento.getPeluquerosOfEstablecimiento(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener peluqueros")
      }
      else {
        data.resultados.forEach(resultado => this.peluqueros.push(resultado));
      }
    })
  }

  /**
 * Metodo para llamar al componente WinOpcionInsertarComponent en forma de dialog.
 */
  openDialogEleccion(): void {
    const dialogRef = this.dialog.open(WinOpcionInsertarComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
      }
      console.log('The dialog was closed');
    });
  }

  /**
 * Metodo para navegar al componente nav-peluqueria.
 */
  toPeluqueria() {
    this.router.navigate(['/navPeluqueria']);
  }

  /**
 * Metodo para navegar al componente inicio-peluqueria y elimina el token de establecimiento.
 */
  back() {
    this.router.navigate(["/inicioPeluqueria"]);
    this.servicioJWT.eliminaJWTEstablecimiento();
  }

}
