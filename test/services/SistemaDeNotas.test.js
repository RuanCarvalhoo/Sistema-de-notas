import SistemaDeNotas from '../../src/services/SistemaDeNotas.js';


describe('SistemaDeNotas', () => {
  test('getNomesTurmas retorna os nomes das turmas cadastradas', () => {
    const sistema = new SistemaDeNotas(['1A']);

    expect(sistema.getNomesTurmas()).toEqual(['1A']);
  });


  test('getNomesTurmas retorna todas as turmas cadastradas', () => {
    const sistema = new SistemaDeNotas(['1A', '1B', '2A']);

    expect(sistema.getNomesTurmas()).toEqual(['1A', '1B', '2A']);
  });
});