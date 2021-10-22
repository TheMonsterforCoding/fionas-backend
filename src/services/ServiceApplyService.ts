import { getCustomRepository } from "typeorm";
import { ServicesApplyRepositories } from "../repositories/ServicesApplyRepositories";

interface ServiceApplyProps {
  services_apply_customers_has_pets_id: number
  services_apply_employees_id: number
  services_apply_services_state_id: number
  services_apply_services_id: number
}

class ServiceApplyService {
  async createServiceAplly({
    services_apply_customers_has_pets_id,
    services_apply_employees_id,
    services_apply_services_state_id,
    services_apply_services_id
  }: ServiceApplyProps) {
    const servicesApplyRepositories = getCustomRepository(ServicesApplyRepositories)

    const serviceApply = servicesApplyRepositories.create({
      services_apply_customers_has_pets_id,
      services_apply_employees_id,
      services_apply_services_state_id,
      services_apply_services_id
    })

    await servicesApplyRepositories.save(serviceApply)

    return serviceApply
  }

  async listServicesApply() {
    const servicesApplyRepositories = getCustomRepository(ServicesApplyRepositories)

    const servicesApply = await servicesApplyRepositories.find()

    return servicesApply
  }

  async listServiceApplyFindId(id: string) {
    const servicesApplyRepositories = getCustomRepository(ServicesApplyRepositories)

    const serviceApply = await servicesApplyRepositories.findOne(id)

    return serviceApply
  }
}

export { ServiceApplyService }
