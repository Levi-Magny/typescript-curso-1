export class Negociacao {
    constructor(date, quant, val) {
        this._data = date;
        this._quantidade = quant;
        this._valor = val;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return this._data;
    }
}
