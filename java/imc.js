const calcular = document.getElementById("calcular");

function imc () {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value; 
     
    const resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && peso !== "") {
    
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso ideal para sua altura!";
        } else if (valorIMC < 25) {
            classificacao = "com o peso ideal para sua altura. Parabéns!!!";
        } else if (valorIMC < 30) {
            classificacao = "levemente acima do peso ideal para sua altura.";
        } else if (valorIMC < 35) {
            classificacao = "com obesidade Grau 1.";
        } else if (valorIMC < 40) {
            classificacao = "com obesidade Grau 2.";
        } else {
            classificacao = "com obesidade Grau 3 - MÓRBIDA... Cuidado!!!";
        }

        resultado.textContent = `${nome.substring(0,1).toUpperCase().concat(nome.substring(1))} 
        seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!!';
    }
}

calcular.addEventListener('click', imc);
