import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface ForceProps {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  /**
   * Recibir el Token
   */
  const authToken = request.headers.authorization

  /**
   * Validar si token está lleno
   */
  if (!authToken) {
    return response.status(401).json({ message: 'Token missing!' })
  }

  /**
   * Validar si el token es válido
   */
  const [, token] = authToken.split(' ')

  try {
    const decode = verify(
      token,
      '37fd5add0581f89519499ba78db0db1d'
    ) as ForceProps

    /**
     * Recuperar información del usuário (ID)
     */
    request.user_id = decode.sub

    return next()
  } catch (err) {
    return response.status(401).json({ message: 'Token invalid!' })
  }
}
