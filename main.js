//main.js

import { getLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#Adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getList();
    for (let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}