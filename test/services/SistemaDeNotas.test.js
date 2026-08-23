const SistemaDeNotas = require('../../src/services/SistemaDeNotas');

describe('SistemaDeNotas', () => {
  test('deve retornar 2 quando somar 1 + 1', () => {
    expect(SistemaDeNotas.soma(1, 1)).toBe(2);
  });
});