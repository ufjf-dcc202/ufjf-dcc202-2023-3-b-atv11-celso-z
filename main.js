//main.js

import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#Adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionaItemNaLista);

atualizarLista();

function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

function adicionaItemNaLista(){
    adicionaNaLista(pEntrada.value);
    atualizarLista();
}

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}