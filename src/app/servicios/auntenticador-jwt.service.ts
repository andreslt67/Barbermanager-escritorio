import { Injectable } from '@angular/core';

/**
 * Servicio para gestionar los tokens de peluqueros y establecimientos.
 */
@Injectable({
  providedIn: 'root'
})
export class AuntenticadorJWTService {

  constructor() { }

  /**
 * Metodo que almacena un token de establecimiento en el localStorage.
 * 
 * @param {string} token Token del usuario.
 */
  almacenaJWTEstablecimiento(token: string) {
    localStorage.setItem("jwtEstablecimiento", token);
  }

  /**
 * Metodo que almacena un token de peluquero en el localStorage.
 * 
 * @param {string} token Token del usuario.
 */
  almacenaJWTPeluquero(token: string) {
    localStorage.setItem("jwtPeluquero", token);
  }

  /**
 * Metodo que retorna el token de establecimiento.
 * 
 * @returns Un string del token de establecimiento.
 */
  recuperaJWTEstablecimiento(): string {
    return localStorage.getItem("jwtEstablecimiento");
  }

  /**
 * Metodo que retorna el token de peluquero.
 * 
 * @returns Un string del token de peluquero.
 */
  recuperaJWTPeluquero(): string {
    return localStorage.getItem("jwtPeluquero");
  }

  /**
 * Metodo que elimina un token de establecimiento del localStorage.
 */
  eliminaJWTEstablecimiento() {
    localStorage.removeItem("jwtEstablecimiento");
  }

  /**
 * Metodo que elimina un token de peluquero del localStorage.
 */
  eliminaJWTPeluquero() {
    localStorage.removeItem("jwtPeluquero");
  }
}
