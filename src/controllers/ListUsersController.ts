import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class ListUsersController {
  async listUser(request: Request, response: Response) {
    const userService = new UserService()

    const users = await userService.listUsers()

    return response.json(users)
  }

  async listUserFindId(request: Request, response: Response) {
    const { id } = request.params

    const userService = new UserService()

    const userById = await userService.listUserFindId(id)

    return response.json(userById)
  }
}

export { ListUsersController }
