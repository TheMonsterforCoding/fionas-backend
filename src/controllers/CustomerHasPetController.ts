import { Request, Response } from "express";
import { CustomerHasPetService } from "../services/CustomerHasPetService";

class CustomerHasPetController {
  async createCustomerHasPet(request: Request, response: Response) {
    const {
      customers_has_pets_pets_id,
      customers_has_pets_customers_id
    } = request.body

    const customerHasPetService = new CustomerHasPetService()

    const customerHasPet = await customerHasPetService.createCustomerHasPet({
      customers_has_pets_pets_id,
      customers_has_pets_customers_id
    })

    return response.json(customerHasPet)
  }

  async listCustomersHasPets(request: Request, response: Response) {
    const customerHasPetService = new CustomerHasPetService()

    const customersHasPets = await customerHasPetService.listCustomersHasPets()

    return response.json(customersHasPets)
  }

  async listCustomerHasPetFindId(request: Request, response: Response) {
    const { id } = request.params

    const customerHasPetService = new CustomerHasPetService()

    const customerHasPet = await customerHasPetService.listCustomerHasPetFindId(id)

    return response.json(customerHasPet)
  }
}

export { CustomerHasPetController }
