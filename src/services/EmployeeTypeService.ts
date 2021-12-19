import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import * as Yup from 'yup'

import { EmployeesTypeRepositories } from '../repositories/EmployeesTypeRepositories'

interface EmployeeTypeProps {
  description: string
}

interface EmployeeTypeUpdateProps {
  description: string
}

class EmployeeTypeService {
  async createEmployeeType({ description }: EmployeeTypeProps) {
    const employeesTypeRepositories = getCustomRepository(
      EmployeesTypeRepositories
    )

    /* ------------ Validar ------------ */
    const data = {
      description
    }

    const schema = Yup.object().shape({
      description: Yup.string().required('Descrição obrigatória')
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
    const employeesTypeRepositories = getCustomRepository(
      EmployeesTypeRepositories
    )

    const employeesType = await employeesTypeRepositories.find()

    return employeesType
  }

  async listEmployeeTypeFindId(id: string) {
    const employeesTypeRepositories = getCustomRepository(
      EmployeesTypeRepositories
    )

    const employeeType = await employeesTypeRepositories.findOne(id)

    return employeeType
  }

  async updateEmployeeTypeFindId(
    id: string,
    { description }: EmployeeTypeUpdateProps
  ) {
    const employeesTypeRepositories = getCustomRepository(
      EmployeesTypeRepositories
    )

    const data = {
      description
    }

    const schema = Yup.object().shape({
      description: Yup.string().required('descricao obrigatório')
    })

    await schema.validate(data, {
      abortEarly: false
    })

    await employeesTypeRepositories.update(id, data)

    const employeeTypeUpdated = await employeesTypeRepositories.findOne(id)

    return classToPlain(employeeTypeUpdated)
  }
}

export { EmployeeTypeService }
