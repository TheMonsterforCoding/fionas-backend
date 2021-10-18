import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

class ListUsersService {
  async execute(id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.findOne({
      id,
      // Rota deve ser exata e só mostrar o id selecionado
    })

    return classToPlain(users)
  }
}

export { ListUsersService }
