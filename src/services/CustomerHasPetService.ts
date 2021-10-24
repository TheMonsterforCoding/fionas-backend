import { getCustomRepository } from "typeorm"
import * as Yup from 'yup'

import { CustomersHasPetsRepositories } from "../repositories/CustomersHasPetsRepositories"

interface CustomerHasPetProps {
  customers_has_pets_pets_id: number
  customers_has_pets_customers_id: number
}

class CustomerHasPetService {
  async createCustomerHasPet({
    customers_has_pets_pets_id,
    customers_has_pets_customers_id
  }: CustomerHasPetProps) {
    const customersHasPetsRepositories = getCustomRepository(CustomersHasPetsRepositories)

    /* ------------ Validar ------------ */
    const data = {
      customers_has_pets_pets_id,
      customers_has_pets_customers_id
    }

    const schema = Yup.object().shape({
      customers_has_pets_pets_id: Yup.number().required('Id de pet obrigatório'),
      customers_has_pets_customers_id: Yup.number().required('Id de cliente obrigatório'),
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const customerHasPet = customersHasPetsRepositories.create(data)

    await customersHasPetsRepositories.save(customerHasPet)

    return customerHasPet
  }

  async listCustomersHasPets() {
    const customersHasPetsRepositories = getCustomRepository(CustomersHasPetsRepositories)

    const customersHasPets = await customersHasPetsRepositories.find()

    return customersHasPets
  }

  async listCustomerHasPetFindId(id: string) {
    const customersHasPetsRepositories = getCustomRepository(CustomersHasPetsRepositories)

    const customerHasPet = await customersHasPetsRepositories.findOne(id)

    return customerHasPet
  }
}

export { CustomerHasPetService }
