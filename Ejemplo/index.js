"use strict";
exports.__esModule = true;
var EjemploPaginacion_1 = require("./EjemploPaginacion");
var ejemplo = new EjemploPaginacion_1.EjemploPaginacion();
ejemplo.navegacionInicial();
console.log("--------------------------------------------------------------------------");
ejemplo.navegacionPaginas({ 'NumeroPagina': 1, 'TamanioPagina': 5 });
