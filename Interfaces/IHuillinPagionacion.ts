import { HuillinPagionacion } from "../Clases/HuillinPagionacion";

export interface IHuillinPagionacion<T> {
  paginacion: HuillinPagionacion<T>;

  navegacionPaginas(event: any):void;
  navegacionInicial():void;
}
