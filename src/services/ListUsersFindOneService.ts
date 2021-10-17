import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.findOne({
      id: 'exemplo@exempolo.com'
      // Debo crear este findOne
    })

    return classToPlain(users)
  }
}

export { ListUsersService }
