import { getCustomRepository } from "typeorm"
import { CustomersRepositories } from "../repositories/CustomersRepositories"

interface CustomerProps {
  customers_users_id: string
}

class CustomerService {
  async createCustomer({
    customers_users_id
  }: CustomerProps) {
    const customersRepositories = getCustomRepository(CustomersRepositories)

    const customer = customersRepositories.create({
      customers_users_id
    })

    await customersRepositories.save(customer)

    return customer
  }

  async listCustomers() {
    const customersRepositories = getCustomRepository(CustomersRepositories)

    const customers = await customersRepositories.find()

    return customers
  }

  async listCustomerFindId(id: string) {
    const customersRepositories = getCustomRepository(CustomersRepositories)

    const customer = await customersRepositories.findOne(id)

    return customer
  }
}

export { CustomerService }
