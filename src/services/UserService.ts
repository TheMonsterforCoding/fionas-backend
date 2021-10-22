import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'
import { hash } from 'bcryptjs'

interface UserProps {
  cpf: string
  avatar: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: number
  state: boolean
}

class UserService {
  async createUser({
    cpf,
    avatar,
    first_name,
    last_name,
    gender,
    password,
    year_of_birth,
    address,
    mail,
    mobile_number,
    state = true,
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
      first_name,
      last_name,
      gender,
      password: passwordHash,
      year_of_birth,
      address,
      mail,
      mobile_number,
      state
    })

    await usersRepository.save(user)

    return user
  }

  async listUsers() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find()

    return classToPlain(users)
  }

  async listUserFindId(id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      id
    })

    // return classToPlain(user)
    return user
  }
}

export { UserService }
