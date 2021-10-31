export class HuillinPaginacion<T> {
  Total: number;
  TamanioPagina: number;
  NumeroPagina: number;
  Items: T[];

  constructor(Total: number, TamanioPagina: number, NumeroPagina: number) {
    this.Total = Total;
    this.TamanioPagina = TamanioPagina;
    this.NumeroPagina = NumeroPagina;
    this.Items = [];
  }
}
