# Huillin-Paginacion
Librería de paginación genérica, establece una estructura de clases estándar en el proyecto al implementar una paginación.

![Logo](logo.png)

## 🚀 ¿Por qué el nombre?
El nombre se compone de dos parte:
- Nombre del proyecto “Huillin”: Huillín viene de una especie en peligro de extinción de la Argentina.
- Nombre del componente.

## Demo

Ir a la carpeta Ejemplo y ejecutar el siguiente comando en la consola:

```bash
  node index.js
```
## Uso

```javascript
import { HuillinPagionacion } from '../Clases/HuillinPagionacion';
import { IHuillinPagionacion } from '../Interfaces/IHuillinPagionacion';

export class EjemploPaginacion implements IHuillinPagionacion<T> {
  paginacion: HuillinPagionacion<T>;
  
  constructor() {
    //datos por defecto de la paginación
    this.paginacion = new HuillinPagionacion<T>(0,5,0);
  }

  navegacionPaginas(event: any): void {
    //implemento como sera la navegacion entre paginas
  }
  
  navegacionInicial(): void {
    //carga inicial de datos
  }
}
```

## Ejemplo

```javascript
import { HuillinPagionacion } from '../Clases/HuillinPagionacion';
import { IHuillinPagionacion } from '../Interfaces/IHuillinPagionacion'
import { Persona } from './Persona';

export class EjemploPaginacion implements IHuillinPagionacion<Persona> {
  paginacion: HuillinPagionacion<Persona>;
  
  constructor() {
    this.paginacion = new HuillinPagionacion<Persona>(0,5,0);
  }

  navegacionPaginas(event: any): void {
    this.paginacion.NumeroPagina = event.NumeroPagina;
    this.paginacion.TamanioPagina = event.TamanioPagina;
    this.paginacion.Total = this.paginacion.Items.length;
    this.paginacion.Items = this.paginacion.Items.filter(x => x.Id > event.NumeroPagina);
  }
  
  navegacionInicial(): void {
    for (let index = 0; index < 10; index++) {
      this.paginacion.Items.push(new Persona(index, `Nombre${index}`));
    }
    this.paginacion.Total = this.paginacion.Items.length;
  }
}
```

## Autor

- [@emiherber](https://github.com/emiherber)