export class Negociacao {

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    get volume(): number {
        return this._quantidade * this._valor;
    }

    /** Nesse caso eu estou retornando um objeto Date() que possui metodos que permitem alterar o estado do atributo
     * Por isso, uma boa pratica e retornar uma copia do atributo
     */
    get data(): Date {
        const dataCopy = new Date(this._data.getTime())
        return dataCopy;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }
}