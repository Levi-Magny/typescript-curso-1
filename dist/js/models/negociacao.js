export class Negociacao {
<<<<<<< HEAD
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
=======
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    /** Nesse caso eu estou retornando um objeto Date() que possui metodos que permitem alterar o estado do atributo
     * Por isso, uma boa pratica e retornar uma copia do atributo
     */
    get data() {
        const dataCopy = new Date(this._data.getTime());
        return dataCopy;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
>>>>>>> arquivos-iniciais
    }
}
