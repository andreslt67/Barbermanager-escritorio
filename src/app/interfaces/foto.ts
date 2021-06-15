/**
 * Interfaz para parsear json Foto
 */
export interface Foto {
    idfoto: number,
    src: String
}

/**
 * Interfaz para parsear json ListaFoto
 */
export interface ListaFoto {
    fotos: Array<Foto>;
}