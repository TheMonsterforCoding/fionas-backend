import { getCustomRepository } from "typeorm";
import * as Yup from 'yup'

import { EmployeesRepositories } from "../repositories/EmployeesRepositories";

interface EmployeeProps {
  employees_users_id: string
  employees_employees_type_id: number
}

class EmployeeService {
  async createEmployee({
    employees_users_id,
    employees_employees_type_id
  }: EmployeeProps) {
    const employeesRepositories = getCustomRepository(EmployeesRepositories)

    /* ------------ Validar ------------ */
    const data = {
      employees_users_id,
      employees_employees_type_id
    }

    const schema = Yup.object().shape({
      employees_users_id: Yup.string().required('Id de usuário obrigatória'),
      employees_employees_type_id: Yup.number().required('Id de tipo de trabalhador obrigatório'),
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const employee = employeesRepositories.create(data)

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

    // const employee = await employeesRepositories.findOne(id)
    const employee = await employeesRepositories.find({
      where: {id},
      relations: ['EmployeesUsersId', 'EmployeesEmployeesTypeId'],
    })

    return employee
  }
}

export { EmployeeService }
