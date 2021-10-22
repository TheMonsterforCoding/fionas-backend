import { Request, Response } from "express";
import { ServiceApplyService } from "../services/ServiceApplyService";

class ServiceApplyController {
  async createServiceApply(request: Request, response: Response) {
    const {
      services_apply_customers_has_pets_id,
      services_apply_employees_id,
      services_apply_services_state_id,
      services_apply_services_id
    } = request.body

    const serviceApplyService = new ServiceApplyService()

    const serviceApply = await serviceApplyService.createServiceAplly({
      services_apply_customers_has_pets_id,
      services_apply_employees_id,
      services_apply_services_state_id,
      services_apply_services_id
    })

    return response.json(serviceApply)
  }

  async listServicesApply(request: Request, response: Response) {
    const serviceApplyService = new ServiceApplyService()

    const servicesApply = await serviceApplyService.listServicesApply()

    return response.json(servicesApply)
  }

  async listServiceApplyFindId(request: Request, response: Response) {
    const { id } = request.params

    const serviceApplyService = new ServiceApplyService()

    const serviceApply = await serviceApplyService.listServiceApplyFindId(id)

    return response.json(serviceApply)
  }
}

export { ServiceApplyController }
