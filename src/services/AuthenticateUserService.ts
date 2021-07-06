import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface UserProps {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: UserProps) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    // Verificar si email existe
    const userAlreadyExists = await usersRepositories.findOne({
      email
    })

    if (!userAlreadyExists) {
      throw new Error('Email or password incorrect')
    }

    // Verificar si contraseña está correcta
    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('Email or password incorrect')
    }

    // Generar token
    const token = sign(
      {
        email: userAlreadyExists.email
      },
      '37fd5add0581f89519499ba78db0db1d',
      {
        subject: userAlreadyExists.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { AuthenticateUserService }
