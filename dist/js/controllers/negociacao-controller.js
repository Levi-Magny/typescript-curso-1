<<<<<<< HEAD
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
=======
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
>>>>>>> arquivos-iniciais
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
<<<<<<< HEAD
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
=======
        const date = new Date(this._inputData.value.replace(exp, ','));
        const negociacao = new Negociacao(date, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        return negociacao;
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
>>>>>>> arquivos-iniciais
    }
}
