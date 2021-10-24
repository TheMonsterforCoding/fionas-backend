import { getCustomRepository } from "typeorm"
import * as Yup from 'yup'

import { ServicesStateRepositories } from "../repositories/ServicesStateRepositories"

interface ServiceStateProps {
  description: string
}

class ServiceStateService {
  async createServiceState({ description }: ServiceStateProps) {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    /* ------------ Validar ------------ */
    const data = {
      description
    }

    const schema = Yup.object().shape({
      description: Yup.string().required('Descrição obrigatória')
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const serviceState = servicesStateRepositories.create(data)

    await servicesStateRepositories.save(serviceState)

    return serviceState
  }

  async listServicesState() {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    const servicesState = await servicesStateRepositories.find()

    return servicesState
  }

  async listServiceStateFindId(id: string) {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    const serviceState = await servicesStateRepositories.findOne(id)

    return serviceState
  }
}

export { ServiceStateService }
