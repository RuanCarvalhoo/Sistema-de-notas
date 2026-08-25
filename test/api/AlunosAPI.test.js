import { buscarAluno } from '../../src/api/AlunosAPI.js';


describe('AlunosAPI', () => {
  test('buscarAluno resolve com os dados do aluno quando o id existe', async () => {
    const aluno = await buscarAluno(1);

    expect(aluno).toEqual({ id: 1, nome: 'Peter Parker', turma: 'Mouratech Dados' });
  });


  test('buscarAluno rejeita com erro quando o id não existe', async () => {
    await expect(buscarAluno(99)).rejects.toThrow('Aluno com id 99 não encontrado.');
  });
});
