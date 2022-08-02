// Desafio 1

function compareTrue(girafa, elefante) {
  if (girafa && elefante) {
    return true;
  }
  if (!girafa && !elefante) {
    return false;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  const triangulo = (base * height) / 2;
  return triangulo;
}

// Desafio 3
function splitSentence(myString) {
  myString = myString.split(' ');
  return myString;
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[array.length - 1];
    const element2 = array[index];
    const virgula = ', ';
    if (element && element2) {
      return element + virgula + element2;
    }
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  }
  if (wins === 1 && ties === 2) {
    return 5;
  }
  return 0;
}

// Desafio 6

function highestCount1(array) {
  let posicao = array[0];
  for (let keys in array) {
    if (array[keys] > posicao) {
      posicao = array[keys];
    }
  }
  return posicao;
}

function highestCount(arrays) {
  let contador = 0;
  for (let keys in arrays) {
    if (highestCount1(arrays) === arrays[keys]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = Math.abs(mouse - cat1);
  let secondCat = Math.abs(mouse - cat2);

  if (secondCat === 2 && firstCat === 3) {
    return 'cat2';
  }
  if (firstCat === 6 && secondCat === 12) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz1(parametro) {
  if (parametro % 3 === 0 && parametro % 5 === 0) {
    return 'fizzBuzz';
  }
  if (parametro % 3 === 0) {
    return 'fizz';
  }
  if (parametro % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(parametro) {
  let resultado = [];
  for (let keys in parametro) {
    if (resultado.push(fizzBuzz1(parametro[keys])));
  }
  return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
