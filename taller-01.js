function convertidorTemp(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function resolvedor(a, b, c, pos) {
  let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  if (pos) {
    return x1;
  } else {
    return x2;
  }
}

function mejorParidad(n) {
  return n % 2 === 0;
}

async function peorParidad(number) {
  // Sin try para que le de más rabia :)
  const response = await fetch(
    `https://api.isevenapi.xyz/api/iseven/${number}/`
  );
  const data = await response.json();
  if (data.iseven) {
    return true;
  } else {
    return false;
  }
}

console.log(convertidorTemp(0));
console.log(resolvedor(1, 5, 4, true));
console.log(mejorParidad(3));
console.log(peorParidad(9));
peorParidad(20).then((result) => console.log(result));
