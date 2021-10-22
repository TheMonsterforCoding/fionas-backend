import { getCustomRepository } from "typeorm"
import { ServicesStateRepositories } from "../repositories/ServicesStateRepositories"

interface ServiceStateProps {
  description: string
}

class ServiceStateService {
  async createServiceState({ description }: ServiceStateProps) {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    const serviceState = servicesStateRepositories.create({
      description
    })

    await servicesStateRepositories.save(serviceState)

    return serviceState
  }

  async listServicesState() {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    const servicesState = servicesStateRepositories.find()

    return servicesState
  }

  async listServiceStateFindId(id: string) {
    const servicesStateRepositories = getCustomRepository(ServicesStateRepositories)

    const serviceState = servicesStateRepositories.findOne(id)

    return serviceState
  }
}

export { ServiceStateService }
