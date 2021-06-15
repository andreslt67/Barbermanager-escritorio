/**
 * Interfaz para parsear json Cita
 */
export interface Cita {
    idcita: number;
    estado: boolean;
    fecha: Date;
    peluquero: string;
    servicio: string;
    precio: Number;
    establecimiento: string;
}

/**
 * Interfaz para parsear json CitaPelu
 */
export interface CitaPelu {
    idcita: number;
    estado: boolean;
    fecha: Date;
    establecimiento: string;
    cliente: string;
    servicio: string;
    precio: Number;
}

/**
 * Interfaz para parsear json ListaCitas
 */
export interface ListaCitas {
    citas: Array<Cita>;
}

/**
 * Interfaz para parsear json ListaCitasPelu
 */
export interface ListaCitasPelu {
    citas: Array<CitaPelu>;
}
