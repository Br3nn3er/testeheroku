import { Request, Response } from "express";
import { container } from "tsyringe";

import { HandleRestricoesService } from "./HandleRestricoesService";

class HandleRestricoesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { siape, dia, letra } = request.body;

    const handleRestricoesService = container.resolve(HandleRestricoesService);

    const createdRestricoes = await handleRestricoesService.create({
      siape,
      dia,
      letra,
    });

    return response.status(201).json(createdRestricoes);
  }

  async read(request: Request, response: Response): Promise<Response> {
    const handleRestricoesService = container.resolve(HandleRestricoesService);

    const listRestricoes = await handleRestricoesService.read();

    return response.status(201).json(listRestricoes);
  }

  async readBySiape(request: Request, response: Response): Promise<Response> {
    const { siape } = request.params;
    
    const handleRestricoesService = container.resolve(HandleRestricoesService);

    const listRestricoes = await handleRestricoesService.readBySiape(siape);

    return response.status(201).json(listRestricoes);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { siape, dia, letra } = request.body;

    const handleRestricoesService = container.resolve(HandleRestricoesService);

    await handleRestricoesService.delete(siape, dia, letra);

    return response.status(201).json("Registro deletado com sucesso!");
  }

  async import(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const handleRestricoesService = container.resolve(HandleRestricoesService);

    await handleRestricoesService.import(file);

    return response.status(201).json("Importação realizada com sucesso!");
  }
}

export { HandleRestricoesController };
