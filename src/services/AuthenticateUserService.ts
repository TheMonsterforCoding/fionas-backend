import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface UserProps {
  cpf: string
  password: string
}

class AuthenticateUserService {
  async execute({ cpf, password }: UserProps) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    // Verificar si cpf existe
    const userAlreadyExists = await usersRepositories.findOne({
      cpf
    })

    if (!userAlreadyExists) {
      throw new Error('cpf ou contrasenha incorreta!')
    }

    // Verificar si contraseña está correcta
    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (password != userAlreadyExists.password) {
      throw new Error('cpf ou contrasenha incorreta!')
    }

    //Obtener tipo de usuario
    let user_cpf = userAlreadyExists.cpf
    let user_type = userAlreadyExists.user_type
    let user_id = userAlreadyExists.id

    // Generar token
    const token = sign(
      {
        cpf: userAlreadyExists.cpf
      },
      '37fd5add0581f89519499ba78db0db1d',
      {
        subject: userAlreadyExists.id,
        expiresIn: '1d'
      }
    )

    return [user_cpf, user_id, user_type, token]
  }
}

export { AuthenticateUserService }
