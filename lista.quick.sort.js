const _ = require('underscore');

const lista = [10, 5, 20, 15];

const listaOrdenada = _.sortBy(lista, _.identity);

console.log(listaOrdenada);

//O método quickSort() da biblioteca Underscore.js é um algoritmo de classificação rápida 
//que classifica uma lista em ordem crescente.
// Necessário instalar o módulo underscore
// npm install underscore