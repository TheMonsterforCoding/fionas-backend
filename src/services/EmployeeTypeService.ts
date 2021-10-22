import { getCustomRepository } from "typeorm";
import { EmployeesTypeRepositories } from "../repositories/EmployeesTypeRepositories";

interface EmployeeTypeProps {
  description: string
}

class EmployeeTypeService {
  async createEmployeeType({
    description
  }: EmployeeTypeProps) {
    const employeesTypeRepositories = getCustomRepository(EmployeesTypeRepositories)

    const employeeType = employeesTypeRepositories.create({
      description
    })

    await employeesTypeRepositories.save(employeeType)

    return employeeType
  }

  async listEmployeesType() {
    const employeesTypeRepositories = getCustomRepository(EmployeesTypeRepositories)

    const employeesType = await employeesTypeRepositories.find()

    return employeesType
  }

  async listEmployeeTypeFindId(id: string) {
    const employeesTypeRepositories = getCustomRepository(EmployeesTypeRepositories)

    const employeeType = await employeesTypeRepositories.findOne(id)

    return employeeType
  }
}

export { EmployeeTypeService }
