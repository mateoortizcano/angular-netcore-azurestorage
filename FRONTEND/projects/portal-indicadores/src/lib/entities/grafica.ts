export interface DatosGrafica {
    Nombre: string;
    Resolucion: string;
    TipoGrafico: string;
    Variables: Variable[];
}

export interface Variable {
    Nombre: string;
    TipoGrafico: string;
    UnidadMedida: string;
    Datos: Dato[];
}

export interface Dato {
    Fecha: string;
    Valor: number;
}