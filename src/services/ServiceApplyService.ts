import { getCustomRepository } from "typeorm";
import * as Yup from 'yup'

import { ServicesApplyRepositories } from "../repositories/ServicesApplyRepositories";

interface ServiceApplyProps {
  part_day: string
  date: Date
  services_apply_customers_has_pets_id: number
  services_apply_employees_id: number
  services_apply_services_state_id: number
  services_apply_services_id: number
}

class ServiceApplyService {
  async createServiceApply({
    part_day,
    date,
    services_apply_customers_has_pets_id,
    services_apply_employees_id,
    services_apply_services_state_id,
    services_apply_services_id
  }: ServiceApplyProps) {
    const servicesApplyRepositories = getCustomRepository(ServicesApplyRepositories)

    /* ------------ Validar ------------ */
    const data = {
      part_day,
      date,
      services_apply_customers_has_pets_id,
      services_apply_employees_id,
      services_apply_services_state_id,
      services_apply_services_id
    }

    const schema = Yup.object().shape({
      date: Yup.date().required('Data obrigatória'),
      part_day: Yup.string().required('Parte do dia obrigatório'),
      services_apply_customers_has_pets_id: Yup.number().required('Id do pet obrigatório'),
      services_apply_employees_id: Yup.number(),
      services_apply_services_state_id: Yup.number().required('Id do estado do serviço obrigatório'),
      services_apply_services_id: Yup.number().required('Id do serviço obrigatório')
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const serviceApply = servicesApplyRepositories.create({
      date,
      part_day,
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
