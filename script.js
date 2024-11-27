const calcular = document.getElementById('calcular');
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const idade = document.getElementById('idade')
const feminino = document.getElementById('feminino')
const masculino = document.getElementById('masculino')


        // Função genérica para aplicar máscara de número float
        function aplicarMascaraFloat(input) {
            input.addEventListener('input', function () {
                let valor = this.value;
        
                // Permite apenas números e um ponto decimal
                valor = valor.replace(/[^0-9.]/g, '');
        
                // Verifica se há mais de um ponto decimal
                const partes = valor.split('.');
                if (partes.length > 2) {
                    valor = partes[0] + '.' + partes[1];
                }
        
                // Limita a quantidade de números decimais
                if (partes[1] && partes[1].length > 2) {
                    partes[1] = partes[1].slice(0, 2);
                    valor = partes[0] + '.' + partes[1];
                }
        
                // Atualiza o valor do campo
                this.value = valor;
            });
        }
        
        
        const alturaInput = document.getElementById('altura');
        const pesoInput = document.getElementById('peso');
        
        // Aplica a função de máscara para ambos os campos
aplicarMascaraFloat(alturaInput);
aplicarMascaraFloat(pesoInput);

// // // Função para alterar o fundo do elemento "teste"
// // function displayOn() {
//     const sectionDisplay  = document.getElementById('sectionDisplay');
// //     sectionDisplay.style.display = 'block';
// // }

function imc() {
    const imcResultado = document.getElementById('imcResultado')
    const imcTexto = document.getElementById('imcTexto')
    var $imc = peso.value / (altura.value * altura.value)
    imcResultado.textContent = $imc.toFixed(2);
    
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        imcTexto.textContent = "Por favor, insira valores numéricos válidos!";
        
    }
    switch (true) {
        case $imc < 16.9:
            imcTexto.textContent =  ' seu imc é ' + $imc.toFixed(2) + " e esta muito a baixo do normal";
            break;
        case $imc >= 17 && $imc <= 18.4:
            imcTexto.textContent =  ' seu imc é ' + $imc.toFixed(2) + " e esta a baixo do normal";
            break;
        case $imc >= 18.5 && $imc <= 24.9:
            imcTexto.textContent =  ' seu imc é ' + $imc.toFixed(2) + " e esta normal";
            break;
        case $imc >= 25 && $imc <= 29.9:
            imcTexto.textContent =  ' seu imc é ' + $imc.toFixed(2) + ", esta com execesso de peso";
            break;
        case $imc >= 30 && $imc <= 34.9:
            imcTexto.textContent = ' seu imc é ' + $imc.toFixed(2) + ", Obesidade grau I";
            break;
        case $imc >= 35 && $imc <= 39.9:
            imcTexto.textContent = ' seu imc é ' + $imc.toFixed(2) + ", Obesidade grau II (severa)";
            break;
        default:
            imcTexto.textContent = ' seu imc é ' + $imc.toFixed(2) + ", Obesidade grau III (mórbida)";
            break;
    }
}


function funMetaboBasal() {
    const metabolismoTexto = document.getElementById('metabolismoTexto');
    var tmb = 0;

    if (masculino.checked) {
         tmb = 88.362 + (13.397 * peso.value) + (4.799 * (altura.value * 100)) - (5.677 * idade.value);
         metabolismoTexto.textContent = tmb.toFixed(2) + 'Kcal';
    }
    else if (feminino.checked) {
         tmb = 447.593 + (9.247 * peso.value) + (3.098 * (altura.value * 100)) - (4.330 * idade.value);
         metabolismoTexto.textContent = tmb.toFixed(2) + 'Kcal';
    }
    else if (!masculino.checked && !feminino.checked) {
        const metaParagrafo = document.getElementById('metaParagrafo');
        metaParagrafo.textContent = "Por favor selecione um sexo."
    }
    
   
}

function macroNutrientes() {
    const proteinas = document.getElementById('proteinas');
    const carboidratos = document.getElementById('carboidratos');
    const gorduras = document.getElementById('gorduras')

    var mProteinas = 2 * peso.value;
    var mCarbo = 7 * peso.value;
    var mGorduras = 1 * peso.value;

    proteinas.textContent = mProteinas + 'g';
    carboidratos.textContent = mCarbo + 'g';
    gorduras.textContent = mGorduras + 'g';


}

function gastoExercicio() {
    function calcularMet(met) {
        const resultadoMet = met * peso.value * 0.5;
        return resultadoMet;
    }

    const ciclismo = document.getElementById('ciclismo');
    ciclismo.textContent = calcularMet(6) + 'Kcal';

    const caminhada = document.getElementById('caminhada');
    caminhada.textContent = calcularMet(5) + 'Kcal';

    const tenis = document.getElementById('tenis');
    tenis.textContent = calcularMet(8) + 'Kcal';

    const boxe = document.getElementById('boxe');
    boxe.textContent = calcularMet(7) + 'Kcal';

    const aerobica = document.getElementById('aerobica');
    aerobica.textContent = calcularMet(7) + 'Kcal';  

    const futebol = document.getElementById('futebol');
    futebol.textContent = calcularMet(8) + 'Kcal';

    const basquete = document.getElementById('basquete');
    basquete.textContent = calcularMet(6.5) + 'Kcal';

    const natacao = document.getElementById('natacao');
    natacao.textContent = calcularMet(6.5) + 'Kcal';
}

function calcularAll(){
    imc();
    funMetaboBasal();
    macroNutrientes();
    gastoExercicio()
}

// Adiciona o evento ao botão
calcular.addEventListener('click',  calcularAll);


