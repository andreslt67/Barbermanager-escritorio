import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establecimiento, EstablecimientoMin, ListaEstablecimientosBuscador } from '../interfaces/establecimiento';
import { ListaPeluqueroBuscador } from '../interfaces/peluquero';

/**
 * Servicio que administra los datos de establecimientos.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioEstablecimientosService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

  /**
 * Obtiene una lista de los establecimientos de la bbdd.
 *
 * @returns Lista de establecimientos.
 */
  getAllPeluqueriasBuscador(): Observable<ListaEstablecimientosBuscador> {
    return this.http.get<ListaEstablecimientosBuscador>('/establecimiento/all')
  }

/**
 * Obtiene una lista de establecimientos según un termino buscado.
 *
 * @param {string} termino Termino para buscar establecimientos.
 * @returns Lista de establecimientos.
 */
  getPeluqueriasFromBuscador(termino: string): Observable<ListaEstablecimientosBuscador> {
    return this.http.get<ListaEstablecimientosBuscador>('/establecimiento/buscar/' + termino);
  }

/**
 * Obtiene los datos de un establecimiento.
 *
 * @param {number} id Id del establecimiento.
 * @returns Un establecimiento
 */
  getPeluqueria(id: number): Observable<Establecimiento> {
    return this.http.get<Establecimiento>('/establecimiento/' + id);
  }

/**
 * Obtiene un establecimiento de la bbdd.
 *
 * @returns establecimiento.
 */
  getPeluqueriaRequest(): Observable<Establecimiento> {
    return this.http.get<Establecimiento>('/establecimiento');
  }

/**
 * Obtiene una lista de peluqueros del establecimiento.
 *
 * @param {number} id Id del establecimiento.
 * @returns Lista de peluqueros.
 */
  getPeluquerosOfEstablecimiento(id: number): Observable<ListaPeluqueroBuscador>{
    return this.http.get<ListaPeluqueroBuscador>('/establecimiento/peluqueros/' + id);
  }

/**
 * Comprueba los datos del establecimiento enviados al servidor y devuelve un establecimiento.
 *
 * @param {string} usuario Propietario del establecimiento.
 * @param {string} clave Credencial del establecimiento.
 * @returns establecimiento.
 */
  auntenticaEstablecimiento(usuario: string, clave: string): Promise<EstablecimientoMin>{
    var jsonObject = {
      propietario: usuario,
      credencial: clave
    }
    return this.http.post<EstablecimientoMin>('/establecimiento/auntentica', jsonObject).toPromise();
  }

/**
 * Crea un nuevo establecimiento en la bbdd.
 *
 * @param {string} propietario Propietario del establecimiento.
 * @param {string} credencial Credencial del establecimiento.
 * @param {string} direccion Direccion del establecimiento.
 * @param {string} telefono Telefono del establecimiento.
 * @param {Time} horaInicio Hora de apertura del establecimiento.
 * @param {Time} horaFin Hora de cierre del establecimiento.
 * @returns el nuevo establecimiento.
 */
  registrarEstablecimiento(propietario: string, credencial: string, direccion: string, telefono: string, horaInicio: Time, horaFin: Time): Promise<EstablecimientoMin>{
    var jsonObject = {
      credencial: credencial,
      propietario: propietario,
      direccion: direccion,
      telefono: telefono,
      horaInicio: horaInicio,
      horaFin: horaFin
    }
    return this.http.post<EstablecimientoMin>('/establecimiento/registrar', jsonObject).toPromise();
  }

  /**
 * Actualiza los datos de un establecimiento en la bbdd.
 *
 * @param {string} propietario Propietario del establecimiento.
 * @param {string} credencial Credencial del establecimiento.
 * @param {string} direccion Direccion del establecimiento.
 * @param {string} telefono Telefono del establecimiento.
 * @param {Time} horaInicio Hora de apertura del establecimiento.
 * @param {Time} horaFin Hora de cierre del establecimiento.
 * @returns el nuevo establecimiento.
 */
  actualizarEstablecimiento(propietario: string, credencial: string, direccion: string, telefono: string, horaInicio: Time, horaFin: Time): Observable<EstablecimientoMin>{
    var jsonObject = {
      propietario: propietario,
      credencial: credencial,
      direccion: direccion,
      telefono: telefono,
      horaInicio: horaInicio,
      horaFin: horaFin
    }
    return this.http.post<EstablecimientoMin>('/establecimiento/actualizar', jsonObject);
  }
  
}
