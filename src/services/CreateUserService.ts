import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface UserProps {
  cpf: string
  avatar: string
  firstName: string
  lastName: string
  genderId: boolean
  password: string
  yearOfBirth: string
  address: string
  mail: string
  mobileNumber: string
  state: boolean
  admin: boolean
}

class CreateUserService {
  async execute({
    cpf,
    avatar,
    firstName,
    lastName,
    genderId,
    password,
    yearOfBirth,
    address,
    mail,
    mobileNumber,
    state = true,
    admin = false
  }: UserProps) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!cpf) {
      throw new Error('CPF Incorreto!')
    }

    const userAlreadyExists = await usersRepository.findOne({
      cpf
    })

    if (userAlreadyExists) {
      throw new Error('Este usuário já existe!')
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      cpf,
      avatar,
      firstName,
      lastName,
      genderId,
      password: passwordHash,
      yearOfBirth,
      address,
      mail,
      mobileNumber,
      state,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
