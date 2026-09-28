alert("Iniciando Programa!");
let num1, num2;

num1 = parseFloat(prompt("Digite o primeiro número: "));
num2 = parseFloat(prompt("Digite o segundo número: "));

alert(`
       ${num1} + ${num2} = ${num1+num2}
       ${num1} - ${num2} = ${num1-num2}
       ${num1} * ${num2} = ${num1*num2}
       ${num1} / ${num2} = ${num1/num2}
       ${num1} % ${num2} = ${num1%num2}`);