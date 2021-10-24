import { getCustomRepository } from "typeorm";
import * as Yup from 'yup'

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

    /* ------------ Validar ------------ */
    const data = {
      services_apply_customers_has_pets_id,
      services_apply_employees_id,
      services_apply_services_state_id,
      services_apply_services_id
    }

    const schema = Yup.object().shape({
      services_apply_customers_has_pets_id: Yup.number().required('Id do pet obrigatório'),
      services_apply_employees_id: Yup.number().required('Id do empregado obrigatório'),
      services_apply_services_state_id: Yup.number().required('Id do estado do serviço obrigatório'),
      services_apply_services_id: Yup.number().required('Id do serviço obrigatório')
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

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
