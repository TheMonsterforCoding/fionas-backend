import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)

  const user = await usersRepositories.findOne({
    id: user_id
  })

  /**
   * Verificar si el usuário es admin
   */
  if (user.admin) {
    return next()
  }

  return response.status(401).json({
    error: 'unauthorized'
  })
}
