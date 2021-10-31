"use strict";
exports.__esModule = true;
exports.HuillinPagionacion = void 0;
var HuillinPagionacion = /** @class */ (function () {
    function HuillinPagionacion(Total, TamanioPagina, NumeroPagina) {
        this.Total = Total;
        this.TamanioPagina = TamanioPagina;
        this.NumeroPagina = NumeroPagina;
        this.Items = [];
    }
    return HuillinPagionacion;
}());
exports.HuillinPagionacion = HuillinPagionacion;
