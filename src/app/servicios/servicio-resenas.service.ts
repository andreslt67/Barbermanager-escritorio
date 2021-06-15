import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaResenaPelu, ListaResenas } from '../interfaces/resena';

/**
 * Servicio que adminstra los datos de reseñas.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioResenasService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) {
  }

/**
 * Retorna una lista de reseñas del cliente
 *
 * @returns Lista de reseñas
 */
  getResenas(): Observable<ListaResenas> {
    return this.http.get<ListaResenas>('/cliente/resenas');
  }

/**
 * Retrona una lista de reseñas del peluquero.
 *
 * @param {number} id Id del peluquero.
 * @returns Lista de reseñas
 */
  getResenasPelu(id: number): Observable<ListaResenaPelu> {
    return this.http.get<ListaResenaPelu>('/peluquero/resenas/' + id);
  }
}
