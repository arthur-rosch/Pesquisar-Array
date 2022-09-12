//////////////////////////////////////////////////////////
// IndexOff: Procura um Valor que o Usuario Digitou, E Retorna o Index desse Valor dentro do Array

let array = ["Arthur", "Gabriel", "Luizão", "Giovanni"];

// Aqui o a Função Esta Procurando Onde o Index do Valor do Arthur

console.log(array.indexOf("Arthur"));

//////////////////////////////////////////////////////////
// Slice: E Uma Função que Copia um array

let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayB = [];
console.log(arrayB);

// Aqui o ArrayB Esta copiando os Valores do ArrayA

arrayB = arrayA.slice();
console.log(arrayB);

//////////////////////////////////////////////////////////
// Unshift: Essa Função Adiciona um Valor No Array No Index 0

let arrayC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayC);

//Agora o Unshift vai Adicionar o Valor 10 No Index 0

arrayC.unshift(10);
console.log(arrayC);

//////////////////////////////////////////////////////////
// Shift: Remove um Valor do Index 0 do Array

let arrayD = [1, 2, 3, 4, 5, 6];
console.log(arrayD);

//Agora Shift vai Remover o Valor do Index 0 do Array

arrayD.shift();
console.log(arrayD);
//////////////////////////////////////////////////////////
// Pop: Remove o Ultimo Valor do Array

let arrayE = [1, 2, 3, 4, 5, 6];
console.log(arrayE);

//Agora Pop vai Remover o Valor do ultimo Index do Array

arrayE.pop();
console.log(arrayE);
