const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnico(arr){
  const mySet = new Set(arr);
  mySet.size;
  return [...mySet];
}

console.log(valoresUnico(meuArray));