<<<<<<< HEAD
import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
=======
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
>>>>>>> arquivos-iniciais
    event.preventDefault();
    controller.adiciona();
});
