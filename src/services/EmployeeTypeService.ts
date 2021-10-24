import { getCustomRepository } from "typeorm";
import * as Yup from 'yup'

import { EmployeesTypeRepositories } from "../repositories/EmployeesTypeRepositories";

interface EmployeeTypeProps {
  description: string
}

class EmployeeTypeService {
  async createEmployeeType({
    description
  }: EmployeeTypeProps) {
    const employeesTypeRepositories = getCustomRepository(EmployeesTypeRepositories)

    /* ------------ Validar ------------ */
    const data = {
      description
    }

    const schema = Yup.object().shape({
      description: Yup.string().required('Descrição obrigatória'),
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const employeeType = employeesTypeRepositories.create(data)

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
