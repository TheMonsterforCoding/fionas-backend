import { getCustomRepository } from "typeorm"
import { ServicesRepositories } from "../repositories/ServicesRepositories"

interface ServiceProps {
  price: number
  description: string
}

class ServiceService {
  async createService({ price, description }: ServiceProps) {
    const servicesRepositories = getCustomRepository(ServicesRepositories)

    const service =  servicesRepositories.create({ price, description})

    await servicesRepositories.save(service)

    return service
  }

  async listServices() {
    const servicesRepositories = getCustomRepository(ServicesRepositories)

    const services = await servicesRepositories.find()

    return services
  }

  async listServiceFindId(id: string) {
    const servicesRepositories = getCustomRepository(ServicesRepositories)

    const services = await servicesRepositories.findOne(id)

    return services
  }
}

export { ServiceService }
