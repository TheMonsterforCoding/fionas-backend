import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

class UserService {
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

    return user
  }
}

export { UserService }
