import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class UserController {
  async createUser(request: Request, response: Response) {
    const {
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
      state
     } = request.body

    const userService = new UserService()

    const user = await userService.createUser({
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
      state
    })

    return response.json(user)
  }

  async listUsers(request: Request, response: Response) {
    const userService = new UserService()

    const users = await userService.listUsers()

    return response.json(users)
  }

  async listUserFindId(request: Request, response: Response) {
    const { id } = request.params

    const userService = new UserService()

    const user = await userService.listUserFindId(id)

    return response.json(user)
  }

  async updateUserFindId(request: Request, response: Response) {
    const { id } = request.params
    const {
      cpf,
      first_name,
      last_name,
      mail,
      mobile_number,
      state
    } = request.body

    const userService = new UserService()

    const user = await userService.updateUserFindId(id,
    {
      cpf: cpf,
      first_name: first_name,
      last_name: last_name,
      mail: mail,
      mobile_number: mobile_number,
      state: state
    })

    return response.json(user)
  }
}

export { UserController }
