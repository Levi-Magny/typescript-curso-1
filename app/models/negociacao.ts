export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(date: Date, quant: number, val: number) {
        this._data = date;
        this._quantidade = quant;
        this._valor = val;
    }
    get volume(): number {
        return this._quantidade * this._valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }
}