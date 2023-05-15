const lista = [
    { nome: 'Item 1', preco: 10 },
    { nome: 'Item 2', preco: 5 },
    { nome: 'Item 3', preco: 20 },
    { nome: 'Item 4', preco: 15 }
  ];
  lista.sort((a, b) => a.preco - b.preco);
  
  console.log(lista);

// Ordenar uma lista em ordem crescente usando o sort
// A função de comparação subtrai o preço do item a do preço do item b. 
// Se o resultado for negativo, a é classificado antes de b. 
// Se for zero, a ordem não importa. 
// Se for positivo,b é classificado antes de a.   
  