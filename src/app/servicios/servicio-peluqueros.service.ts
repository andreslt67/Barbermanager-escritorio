import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPeluqueroBuscador, Peluquero, PeluqueroMin } from '../interfaces/peluquero';

/**
 * Servicio que administra los datos del peluquero.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioPeluquerosService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de peluqueros.
 *
 * @returns Lista de peluqueros.
 */
  getAllPeluquerosBuscador(): Observable<ListaPeluqueroBuscador> {
    return this.http.get<ListaPeluqueroBuscador>('/peluquero/all')
  }

/**
 * Retorna una lista de peluqueros segun el termino pasado por parametro.
 *
 * @param {string} termino  Termino para buscar peluqueros en la bbdd.
 * @returns Lista de peluqueros.
 */
  getPeluquerosFromBuscador(termino: string): Observable<ListaPeluqueroBuscador> {
    return this.http.get<ListaPeluqueroBuscador>('/peluquero/buscar/' + termino);
  }

/**
 * Obtiene los datos de un peluquero del servidor
 *
 * @param {number} id Id del peluquero.
 * @returns peluquero encontrado.
 */
  getPeluquero(id: number): Observable<Peluquero> {
    return this.http.get<Peluquero>('/peluquero/get/' + id);
  }

  /**
 * Obtiene los datos de un peluquero del servidor obtenido del request.
 *
 * @returns peluquero encontrado.
 */
  getPeluqueroRequest(): Observable<Peluquero> {
    return this.http.get<Peluquero>('/peluquero/get');
  }

  /**
 * Registrar peluquero en la bbdd.
 *
 * @param {string} usuario Usuario del peluquero.
 * @param {string} clave Clave del peluquero.
 * @param {string} email Email del peluquero.
 * @param {string} nombre Nombre del peluquero.
 * @param {string} direccion Direccion del establecimiento del peluquero.
 * @returns peluquero registrado.
 */
  registrarPeluquero(usuario: string, clave: string, email: string, nombre: string, direccion: string): Promise<PeluqueroMin> {
    var jsonOnject = {
      usuario: usuario,
      clave: clave,
      email: email,
      nombre: nombre,
      direccion: direccion
    }

    return this.http.post<PeluqueroMin>('/peluquero/registrar', jsonOnject).toPromise();
  }

/**
 * Comprueba los datos enviados al servidor y si son correctos retorna un peluquero.
 *
 * @param {string} usuario Usuario del peluquero.
 * @param {string} clave Clave del peluquero.
 * @returns peluquero auntenticado.
 */
  auntenticaPeluquero(usuario: string, clave: string): Promise<PeluqueroMin> {
    var jsonObject = {
      usuario: usuario,
      clave: clave
    }

    return this.http.post<PeluqueroMin>('/peluquero/auntentica', jsonObject).toPromise();
  }

/**
 * Elimina el establecimiento asociado al peluquero.
 *
 * @param {number} id Id del peluquero.
 */
  eliminarPeluquero(id: number): Observable<Object>{
    return this.http.get<Object>('/establecimiento/eliminar/' + id);
  }

/**
 * Asocia un establecimiento al peluquero pasado por parametro.
 *
 * @param {string} usuario Usuario del peluquero.
 * @param {string} clave Clave del peluquero.
 * @returns peluquero ingresado.
 */
  ingresarPeluquero(usuario: string, clave: string): Promise<PeluqueroMin> {
    var jsonObject = {
      usuario: usuario,
      clave: clave
    }

    return this.http.post<PeluqueroMin>('/peluquero/ingresar', jsonObject).toPromise();
  }

/**
 * Actualizar los datos del peluquero en la bbdd.
 *
 * @param {string} usuario Usuario del peluquero.
 * @param {string} clave Clave del peluquero.
 * @param {string} email Email del peluquero.
 * @param {string} nombre Nombre del peluquero.
 */
  actualizarPeluquero(usuario: string, clave: string, email: string, nombre: string): Observable<Object> {
    var jsonObject = {
      usuario: usuario,
      clave: clave,
      email: email,
      nombre: nombre
    }
    return this.http.post<Object>('/peluquero/actualizar', jsonObject);
  }
}
