import { Request, Response } from "express";
import { ServiceService } from "../services/ServiceService";

class ServiceController {
  async createService(request: Request, response: Response) {
    const { price, description } = request.body

    const serviceService = new ServiceService()

    const service = await serviceService.createService({
      price,
      description
    })

    return response.json(service)
  }

  async listServices(request: Request, response: Response) {
    const serviceService = new ServiceService()

    const services = await serviceService.listServices()

    return response.json(services)
  }

  async listServiceFindId(request: Request, response: Response) {
    const { id } = request.params

    const serviceService = new ServiceService()

    const service = await serviceService.listServiceFindId(id)

    return response.json(service)
  }
}

export { ServiceController }
