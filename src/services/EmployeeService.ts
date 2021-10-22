import { getCustomRepository } from "typeorm";
import { EmployeesRepositories } from "../repositories/EmployeesRepositories";

interface EmployeeProps {
  description: string
  employees_users_id: string
  employees_employees_type_id: number
}

class EmployeeService {
  async createEmployee({
    description,
    employees_users_id,
    employees_employees_type_id
  }: EmployeeProps) {
    const employeesRepositories = getCustomRepository(EmployeesRepositories)

    const employee = employeesRepositories.create({
      description,
      employees_users_id,
      employees_employees_type_id
    })

    await employeesRepositories.save(employee)

    return employee
  }

  async listEmployees() {
    const employeesRepositories = getCustomRepository(EmployeesRepositories)

    const employees = await employeesRepositories.find()

    return employees
  }

  async listEmployeeFindId(id: string) {
    const employeesRepositories = getCustomRepository(EmployeesRepositories)

    const employee = await employeesRepositories.findOne(id)

    return employee
  }
}

export { EmployeeService }
