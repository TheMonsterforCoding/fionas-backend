import { getCustomRepository } from "typeorm"
import * as Yup from 'yup'

import { ServicesRepositories } from "../repositories/ServicesRepositories"

interface ServiceProps {
  price: number
  description: string
}

class ServiceService {
  async createService({ price, description }: ServiceProps) {
    const servicesRepositories = getCustomRepository(ServicesRepositories)

    /* ------------ Validar ------------ */
    const data = {
      price,
      description
    }

    const schema = Yup.object().shape({
      price: Yup.number().required('Preço obrigatório'),
      description: Yup.string().required('Descrição obrigatória')
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const service =  servicesRepositories.create(data)

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
