import { Time } from "@angular/common";

/**
 * Interfaz para parsear json Establecimiento
 */
export interface Establecimiento {
    idestablecimiento: number,
    propietario: string,
    credencial: string,
    direccion: string,
    telefono: string,
    horaInicio: Time,
    horaFin: Time
}

/**
 * Interfaz para parsear json EstablecimientoBuscador
 */
export interface EstablecimientoBuscador {
    idestablecimiento: number,
    direccion: string
}

/**
 * Interfaz para parsear json ListaEstablecimientosBuscador
 */
export interface ListaEstablecimientosBuscador {
    resultados: Array<EstablecimientoBuscador>
}

/**
 * Interfaz para parsear json EstablecimientoMin
 */
export interface EstablecimientoMin {
    jwt: string
}
