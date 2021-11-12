import { Request, Response } from 'express'
import { EmployeeService } from '../services/EmployeeService'

class EmployeeController {
  async createEmployee(request: Request, response: Response) {
    const { employees_users_id, employees_employees_type_id } =
      request.body

    const employeeService = new EmployeeService()

    const employee = await employeeService.createEmployee({
      employees_users_id,
      employees_employees_type_id
    })

    return response.json(employee)
  }

  async listEmployees(request: Request, response: Response) {
    const employeeService = new EmployeeService()

    const employee = await employeeService.listEmployees()

    return response.json(employee)
  }

  async listEmployeeFindId(request: Request, response: Response) {
    const { id } = request.params

    const employeeService = new EmployeeService()

    const employee = await employeeService.listEmployeeFindId(id)

    return response.json(employee)
  }
}

export { EmployeeController }
