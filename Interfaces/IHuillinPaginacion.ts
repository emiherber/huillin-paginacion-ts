import { HuillinPaginacion } from "../Clases/HuillinPaginacion";

export interface IHuillinPaginacion<T> {
  paginacion: HuillinPaginacion<T>;

  navegacionPaginas(event: any):void;
  navegacionInicial():void;
}
