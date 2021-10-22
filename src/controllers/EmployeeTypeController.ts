import { Request, Response } from 'express'
import { EmployeeTypeService } from '../services/EmployeeTypeService'

class EmployeeTypeController {
  async createEmployeeType(request: Request, response: Response) {
    const { description } = request.body

    const employeeTypeService = new EmployeeTypeService()

    const employeetype = await employeeTypeService.createEmployeeType({
      description
    })

    return response.json(employeetype)
  }

  async listEmployeesType(request: Request, response: Response) {
    const employeeTypeService = new EmployeeTypeService()

    const employeestype = await employeeTypeService.listEmployeesType()

    return response.json(employeestype)
  }

  async listEmployeeTypeFindId(request: Request, response: Response) {
    const { id } = request.params

    const employeeTypeService = new EmployeeTypeService()

    const employeetype = await employeeTypeService.listEmployeeTypeFindId(id)

    return response.json(employeetype)
  }
}

export { EmployeeTypeController }
