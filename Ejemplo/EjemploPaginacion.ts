import { HuillinPagionacion } from '../Clases/HuillinPagionacion';
import { IHuillinPagionacion } from '../Interfaces/IHuillinPagionacion';
import { Persona } from './Persona';

export class EjemploPaginacion implements IHuillinPagionacion<Persona> {
  paginacion: HuillinPagionacion<Persona>;
  
  constructor() {
    this.paginacion = new HuillinPagionacion<Persona>(0,5,0);
  }

  navegacionPaginas(event: any): void {
    console.log("Event");
    console.log(event);
    this.paginacion.NumeroPagina = event.NumeroPagina;
    this.paginacion.TamanioPagina = event.TamanioPagina;
    this.paginacion.Total = this.paginacion.Items.length;
    this.paginacion.Items = this.paginacion.Items.filter(x => x.Id > event.NumeroPagina);
    console.log("Resultado")
    console.log(this.paginacion);
  }
  
  navegacionInicial(): void {
    for (let index = 0; index < 10; index++) {
      this.paginacion.Items.push(new Persona(index, `Nombre${index}`));
    }
    this.paginacion.Total = this.paginacion.Items.length;
    console.log("Resultado inicial")
    console.log(this.paginacion);
  }
  
}
