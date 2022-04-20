import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        this._inputQuantidade = document.querySelector('#quantidade');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());

        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const negociacao = new Negociacao(date, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        return negociacao;
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
