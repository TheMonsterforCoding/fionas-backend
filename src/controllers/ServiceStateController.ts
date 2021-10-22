import { request, Request, response, Response } from "express";
import { ServiceStateService } from "../services/ServiceStateService";

class ServiceStateController {
  async createServiceState(request: Request, response: Response) {
    const { description } = request.body

    const serviceStateService = new ServiceStateService()

    const serviceState = await serviceStateService.createServiceState({
      description
    })

    return response.json(serviceState)
  }

  async listServiceState(request: Request, response: Response) {
    const serviceStateService = new ServiceStateService()

    const servicesState = await serviceStateService.listServicesState()

    return response.json(servicesState)
  }

  async listServiceStateFindId(request: Request, response: Response) {
    const { id } = request.params

    const serviceStateService = new ServiceStateService()

    const serviceState = await serviceStateService.listServiceStateFindId(id)

    return response.json(serviceState)
  }
}

export { ServiceStateController }
