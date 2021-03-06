import { getCustomRepository, MinKey } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'
import * as Yup from 'yup'
import { hash } from 'bcryptjs'

interface UserProps {
  cpf: string
  first_name: string
  last_name: string
  gender: boolean
  password: string
  year_of_birth: number
  address: string
  mail: string
  mobile_number: number
  state: boolean
  user_type: boolean
}

interface UserUpdateProps {
  cpf: string
  first_name: string
  last_name: string
  mail: string
  mobile_number: number
  state: boolean
  user_type: boolean
  password: string
}

class UserService {
  async createUser({
    cpf,
    first_name,
    last_name,
    gender,
    password,
    year_of_birth,
    address,
    mail,
    mobile_number,
    state = true,
    user_type = true
  }: UserProps) {
    const usersRepository = getCustomRepository(UsersRepositories)

    /* ------------ Validar ------------ */
    const userAlreadyExists = await usersRepository.findOne({
      cpf
    })

    if (userAlreadyExists) {
      throw new Error('Este usuário já existe!')
    }

    // const passwordHash = await hash(password, 8)

    const data = {
      cpf,
      first_name,
      last_name,
      gender,
      // password: passwordHash,
      password,
      year_of_birth,
      address,
      mail,
      mobile_number,
      state,
      user_type
    }

    const schema = Yup.object().shape({
      cpf: Yup.string().required('CPF obrigatório'),
      first_name: Yup.string().required('Nome obrigatório'),
      last_name: Yup.string().required('Sobrenome obrigatório'),
      gender: Yup.boolean().required('Gênero obrigatório'),
      password: Yup.string().min(6).required('Contrasenha obrigatória'),
      year_of_birth: Yup.number().required('Ano de nacimiento obrigatório'),
      address: Yup.string().required('Endereço obrigatório'),
      mail: Yup.string()
        .email('Deve ser um email válido')
        .required('Email obrigatório'),
      mobile_number: Yup.number().required('Número celular obrigatório'),
      state: Yup.boolean().required('Estado obrigatório'),
      user_type: Yup.boolean().required('Tipo de usuario obrigatório')
    })

    await schema.validate(data, {
      abortEarly: false
    })
    /* ---------- Fin Validación ---------- */

    const user = usersRepository.create(data)

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

    return classToPlain(user)
  }

  async updateUserFindId(
    id: string,
    {
      cpf,
      first_name,
      last_name,
      mail,
      mobile_number,
      state = true,
      user_type = true,
      password
    }: UserUpdateProps
  ) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const data = {
      cpf,
      first_name,
      last_name,
      mail,
      mobile_number,
      state,
      user_type,
      password
    }

    const schema = Yup.object().shape({
      cpf: Yup.string(),
      first_name: Yup.string(),
      last_name: Yup.string(),
      mail: Yup.string().email('Deve ser um email válido'),
      mobile_number: Yup.number(),
      state: Yup.boolean(),
      user_type: Yup.boolean(),
      password: Yup.string()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    await usersRepositories.update(id, data)

    const userUpdated = await usersRepositories.findOne({
      id
    })

    return classToPlain(userUpdated)
  }
}

export { UserService }
