// Exercício 1:

function imc (altura, peso) {

    return Math.round(peso / (altura * altura));
}
var altura = prompt ('insira sua altura');
var peso = prompt ('Insira seu peso');
var resultado = imc(altura, peso);
alert(resultado);

// Ou

function imc (altura, peso) {
    alturametros = prompt ('informe sua altura');
    peso = prompt ('Informe seu peso');
   return calculoImc = (alturametros * alturametros) / peso;
}
imc();

// Exercício 2:

function fatorial () {
  var numeroInformado = prompt ('Que número deseja descobrir o fatorial?'); 
  while (numeroInformado < numeroInformado) {
    if (numeroInformado > 0 ) {
   var multiplicacao = numeroInformado * (numeroInformado-1);
   return(multiplicacao);
  }
  } 
} fatorial();// Está errado.

// Exercício 3: Coversão dolár - Real.
var senha = 156298;
senhaDigitada = prompt('Insira sua senha');
tentativas = 3;

function conversao(reais) {
    calculandoAConversao = 5000 * 4,80; 
    if (senhaDigitada == senha) { 
        alert('Seu Saldo em dólares é de $5000');  
        alert(`Seu saldo em reais é de ${calculandoAConversao}`);
    }  else {
        alert(`Senha incorreta, tente novamente. Restam ${tentativas}`)
    }
}tentativas--;
conversao ();

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

  
  // Exercício 4: Área e perímetro:
  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

  // Exercício 6: Tabuada do número
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);