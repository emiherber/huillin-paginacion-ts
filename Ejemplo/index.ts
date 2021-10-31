import { EjemploPaginacion } from "./EjemploPaginacion";

let ejemplo = new EjemploPaginacion();

ejemplo.navegacionInicial();
console.log("--------------------------------------------------------------------------");
ejemplo.navegacionPaginas({'NumeroPagina':1,'TamanioPagina':5});