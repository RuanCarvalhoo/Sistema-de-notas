import { buscarAluno } from '../../src/api/AlunosAPI.js';


describe('AlunosAPI', () => {
  test('buscarAluno resolve com os dados do aluno quando o id existe', async () => {
    const aluno = await buscarAluno(1);

    expect(aluno).toEqual({ id: 1, nome: 'Peter Parker', turma: 'Mouratech Dados' });
  });
});
