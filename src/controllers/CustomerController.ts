import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

class CustomerController {
  async createCustomer(request: Request, response: Response) {
    const { customers_users_id } = request.body

    const customerService = new CustomerService()

    const customer = await customerService.createCustomer({
      customers_users_id
    })

    return response.json(customer)
  }

  async listCustomers(request: Request, response: Response) {
    const customerService = new CustomerService()

    const customers = await customerService.listCustomers()

    return response.json(customers)
  }

  async listCustomerFindId(request: Request, response: Response) {
    const { id } = request.params

    const customerService = new CustomerService()

    const customer = await customerService.listCustomerFindId(id)

    return response.json(customer)
  }
}

export { CustomerController }
