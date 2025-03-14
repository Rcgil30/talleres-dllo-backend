function desglosarString(cadena, tipoLetra) {
  if (tipoLetra !== "vocales" && tipoLetra !== "consonantes") {
    return "El tipo de letra no es válido";
  }
  const vocales = ["a", "e", "i", "o", "u"];
  const esVocal = tipoLetra === "vocales";
  let cont = 0;
  for (char in cadena) {
    if (vocales.includes(cadena[char]) === esVocal) {
      cont++;
    }
  }
  return cont;
}

function twoSum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }
  return [];
}

function conversionRomana(romano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < romano.length; i++) {
    let actual = valores[romano[i]];
    let siguiente = valores[romano[i + 1]];

    if (siguiente > actual) {
      total += siguiente - actual;
      i++; // Saltamos el siguiente carácter
    } else {
      total += actual;
    }
  }
  return total;
}
