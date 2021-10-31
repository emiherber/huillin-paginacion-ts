"use strict";
exports.__esModule = true;
exports.EjemploPaginacion = void 0;
var HuillinPaginacion_1 = require("../Clases/HuillinPaginacion");
var Persona_1 = require("./Persona");
var EjemploPaginacion = /** @class */ (function () {
    function EjemploPaginacion() {
        this.paginacion = new HuillinPaginacion_1.HuillinPaginacion(0, 5, 0);
    }
    EjemploPaginacion.prototype.navegacionPaginas = function (event) {
        console.log("Event");
        console.log(event);
        this.paginacion.NumeroPagina = event.NumeroPagina;
        this.paginacion.TamanioPagina = event.TamanioPagina;
        this.paginacion.Total = this.paginacion.Items.length;
        this.paginacion.Items = this.paginacion.Items.filter(function (x) { return x.Id > event.NumeroPagina; });
        console.log("Resultado");
        console.log(this.paginacion);
    };
    EjemploPaginacion.prototype.navegacionInicial = function () {
        for (var index = 0; index < 10; index++) {
            this.paginacion.Items.push(new Persona_1.Persona(index, "Nombre" + index));
        }
        this.paginacion.Total = this.paginacion.Items.length;
        console.log("Resultado inicial");
        console.log(this.paginacion);
    };
    return EjemploPaginacion;
}());
exports.EjemploPaginacion = EjemploPaginacion;
