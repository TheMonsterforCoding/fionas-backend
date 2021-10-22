import { getCustomRepository } from "typeorm"
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

    const customerHasPet = customersHasPetsRepositories.create({
      customers_has_pets_pets_id,
      customers_has_pets_customers_id
    })

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
