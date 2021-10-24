import { getCustomRepository } from "typeorm"
import * as Yup from 'yup'

import { CustomersRepositories } from "../repositories/CustomersRepositories"

interface CustomerProps {
  customers_users_id: string
}

class CustomerService {
  async createCustomer({
    customers_users_id
  }: CustomerProps) {
    const customersRepositories = getCustomRepository(CustomersRepositories)

    /* ------------ Validar ------------ */
    const data = {
      customers_users_id
    }

    const schema = Yup.object().shape({
      customers_users_id: Yup.string().required('Id de usuário obrigatória'),
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const customer = customersRepositories.create(data)

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
