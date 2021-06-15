/**
 * Interfaz para parsear json Resena
 */
export interface Resena {
    idresena: number,
    fecha: Date,
    peluquero: string,
    contenido: string,
    valoracion: number
}

/**
 * Interfaz para parsear json ResenaPelu
 */
export interface ResenaPelu {
    idresena: number,
    fecha: Date,
    cliente: string,
    contenido: string,
    valoracion: number
}

/**
 * Interfaz para parsear json ListaResenas
 */
export interface ListaResenas {
    resenas: Array<Resena>;
}

/**
 * Interfaz para parsear json ListaResenaPelu
 */
export interface ListaResenaPelu {
    resenas: Array<ResenaPelu>;
}
