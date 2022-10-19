/*
Clase para almacenar/presentar recetas.
*/
export class Receta {

    /**Constructor por defecto */
  constructor(
    public id: number,
    public nombre: string,
    public categoria: string,
    public etiquetas: string,
    public ingredientes: string,
    public instrucciones: string,
    public notas: string,
    public fechaAlta: string
  ) {}
}
