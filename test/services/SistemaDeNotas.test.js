const SistemaDeNotas = require('../../src/services/SistemaDeNotas');

describe('SistemaDeNotas', () => {
  test('deve retornar 2 quando somar 1 + 1', () => {
    expect(SistemaDeNotas.soma(1, 1)).toBe(2);
  });

  test('deve retornar 5 quando somar 2 + 3', () => {
    expect(SistemaDeNotas.soma(2, 3)).toBe(5);
  });
});