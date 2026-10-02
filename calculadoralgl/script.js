const botoes = document.querySelectorAll(".btn")

const input1 = document.getElementById("numb1")
const input2 = document.getElementById("numb2")

const resultado = document.getElementById("resultado")


botoes.forEach((btn) => {

    btn.addEventListener("click", () => {

        const valor1 = input1.value
        const valor2 = input2.value

        if (valor1.trim() === "" || valor2.trim() === "") {

            resultado.style.display = "none"

            return

        }

        const num1 = Number(valor1)
        const num2 = Number(valor2)

        if (isNaN(num1) || isNaN(num2)) {

            resultado.style.display = "none"

            return

        }

        const operador = btn.dataset.operador

        const valorResultado = calcular(num1, num2, operador)
        
        resultado.textContent = "Resultado: " + valorResultado

        resultado.style.display = "block"


    })

})


function calcular(a, b, operador) {

    const num1 = Number(a)

    const num2 = Number(b)

    if (isNaN(num1) || isNaN(num2)) {

        return "Erro: valores inválidos"

    }

    switch (operador) {

        case '+':
            return num1 + num2

        case '-':
            return num1 - num2

        case '*':
            return num1 * num2

        case '/':
            return num2 !== 0 ?
                num1 / num2 :
                "Erro: divisão por zero"  

        default:
            return "Operador inválido"
    }

}