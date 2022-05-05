//archivo de tipado de datos de toda la aplicacion de node
//tipos ... algunos ejemplos de tipos en ts

export type Weather = 'suny' | 'raining' | 'cloudy' | 'windy';
export type Visibility = 'greate' | 'good';

//interfas .... un ejemplo de interfaces usando los tipos existentes
//una interfaz se puede etender
export interface DiriEntry{
    id: number,
    date: string,
    weater: Weather,
    visibility: Visibility,
    comment: string
}

interface SpecialDiriEntry extends DiriEntry{
    flightNumber: number
}