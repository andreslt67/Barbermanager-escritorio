import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaCitas, ListaCitasPelu } from '../interfaces/cita';

/**
 * Servicio para administrar las citas
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioCitasService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Obtiene una lista de citas del servidor
 * 
 * @returns La lista de citas del cliente.
 */
  getCitas(): Observable<ListaCitas> {
    return this.http.get<ListaCitas>('/cliente/citas')
  }

/**
 * Retorna una lista de citas del peluquero
 */
  getCitasPelu(): Observable<ListaCitasPelu> {
    return this.http.get<ListaCitasPelu>('/peluquero/citas');
  }

/**
 * Retorna una lista de citas de una fecha concreta.
 *
 * @param {number} idpelu  Id del peluquero.
 * @param {Date} fecha Fecha de las citas
 */
  getCitasPeluFecha(idpelu: number, fecha: Date): Observable<ListaCitasPelu> {
    var jsonObject = {
      idpelu: idpelu,
      fecha: fecha
    }

    return this.http.post<ListaCitasPelu>('/peluquero/citas/fecha/desk', jsonObject);
  }

/**
 * Crea una cita en la bbdd con los datos enviados al servidor.
 *
 * @param {Time} hora Hora de la cita.
 * @param {Date} fecha Fecha de la cita.
 * @param {number} idservicio Id del servicio elegido.
 * @param {number} idpelu Id del peluquero de la cita
 */
  obtenerCita(idcita: number, idservicio: number): Observable<Object> {
    var jsonObject = {
      idcita: idcita,
      idservicio: idservicio
    }

    return this.http.post<object>('/cita/obtener', jsonObject);
  }

/**
 * Elimina una cita de la bbdd
 *
 * @param {number} id  Id de la cita.
 */
  renunciarCita(id: number): Observable<Object> {
    return this.http.get<Object>('/cita/renunciar/' + id);
  }
}
