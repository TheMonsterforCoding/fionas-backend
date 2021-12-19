import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async create(request: Request, response: Response) {
    const { cpf, password } = request.body

    const authenticateUserService = new AuthenticateUserService()

    const data = await authenticateUserService.execute({
      cpf,
      password
    })

    return response.json(data)
  }
}

export { AuthenticateUserController }
