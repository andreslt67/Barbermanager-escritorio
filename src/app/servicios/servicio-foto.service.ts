import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaFoto } from '../interfaces/foto';

/**
 * Servicio que administra las fotos
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioFotoService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de fotos de un peluquero.
 *
 * @param {number} id  Id del peluquero.
 * @returns Lista de fotos.
 */
  getFotos(id: number): Observable<ListaFoto>{
    return this.http.get<ListaFoto>('/peluquero/fotos/' + id);
  }

/**
 * Sube una foto a la bbdd.
 *
 * @param {number} id  Id de la foto.
 * @param {string} src Imagen codificada.
 */
  subirFoto(id: number, src: String): Observable<Object> {
    var jsonObject = {
      idPeluquero: id,
      src: src
    }
    return this.http.post<Object>('/foto/subir', jsonObject);
  }

/**
 * Elimina una foto de la bbdd.
 *
 * @param {number} id  Id de la foto.
 */
  borrarFoto(id: number): Observable<Object> {
    return this.http.get<Object>('/foto/eliminar/' + id);
  }
}
