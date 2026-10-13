let totalTestes = 0;
let testesOk = 0;

function expect(valorRecebido) {
  return {
    toBe(valorEsperado) {
      totalTestes++;
      if (valorRecebido === valorEsperado) {
        testesOk++;
        console.log("Passou");
      } else {
        console.log("Reprovou");
      }
    },
  };
}

function test(nome, funcaoDeTeste) {
  funcaoDeTeste();
}

function resumoFinal() {
  console.log(`\n${testesOk}/${totalTestes} testes passaram`);
}

modulue.exports = { expect, test, resumoFinal };
