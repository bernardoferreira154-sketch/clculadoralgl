const btn1 = document.getElementById("soma")
const btn2 = document.getElementById("subtracao")
const btn3 = document.getElementById("multiplicacao")
const btn4 = document.getElementById("divisao")
const botoes = document.querySelectorAll(".btn")

let num1 = document.getElementById("numb1").value
let num2 = document.getElementById("numb2").value

botoes.forEach((btn) => {

    btn.addEventListener(click, () => {



    })
    
})








function calcular(a, b, operador) {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
    return "Erro: valores inválidos";
    }

    switch (operador) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/':
    return num2 !== 0 ?
    num1 / num2 :
    "Erro: divisão por zero";
    default:
    return "Operador inválido";
    }

   }