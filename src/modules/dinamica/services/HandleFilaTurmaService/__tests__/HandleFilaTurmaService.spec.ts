import { AppError } from "../../../../../shared/errors/AppError";
import { FilaTurmaRepositoryTestMock } from "../../../infra/typeorm/repositories/mocks/FilaTurmaRepositoryTestMock";
import { HandleFilaTurmaService } from "../HandleFilaTurmaService";

describe("Handle CRUD operations related to fila_turma", () => {
  let filaRepositoryTest: FilaTurmaRepositoryTestMock;
  let handleFilaTurmaService: HandleFilaTurmaService;

  beforeEach(() => {
    filaRepositoryTest = new FilaTurmaRepositoryTestMock();
    handleFilaTurmaService = new HandleFilaTurmaService(filaRepositoryTest);
  });

  it("Should be able to create a new fila_turma record", async () => {
    const fila = await handleFilaTurmaService.create({
      id_turma: 1,
      id_fila: 1,
      prioridade: 1,
    });

    expect(fila.id_turma).toBe(1);
    expect(fila.id_turma).toBe(1);
  });

  it("Should not be able to create an existing fila_turma record", async () => {
    await expect(async () => {
      await handleFilaTurmaService.create({
        id_turma: 1,
        id_fila: 1,
        prioridade: 1,
      });

      await handleFilaTurmaService.create({
        id_turma: 1,
        id_fila: 1,
        prioridade: 1,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to read all fila_turma records", async () => {
    await handleFilaTurmaService.create({
      id_turma: 1,
      id_fila: 1,
      prioridade: 1,
    });

    await handleFilaTurmaService.create({
      id_turma: 1,
      id_fila: 2,
      prioridade: 1,
    });

    const filas = await handleFilaTurmaService.read();

    expect(filas).toHaveLength(2);
  });

  it("Should be able to update an existing fila_turma record", async () => {
    await handleFilaTurmaService.create({
      id_turma: 1,
      id_fila: 1,
      prioridade: 1,
    });

    await handleFilaTurmaService.update({
      id_turma: 1,
      id_fila: 1,
      prioridade: 5,
    });

    const filaResult = await filaRepositoryTest.queryByTurmaEFila(1, 1);

    expect(filaResult.prioridade).toBe(5);
  });

  it("Should not be able to update an unexisting fila_turma record", async () => {
    await expect(async () => {
      await handleFilaTurmaService.update({
        id_turma: 1111,
        id_fila: 1111,
        prioridade: 5,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to delete a fila_turma record", async () => {
    await handleFilaTurmaService.create({
      id_turma: 55,
      id_fila: 55,
      prioridade: 1,
    });

    await handleFilaTurmaService.delete(55);

    const filas = await filaRepositoryTest.listFilas();

    expect(filas).toHaveLength(0);
  });
});
