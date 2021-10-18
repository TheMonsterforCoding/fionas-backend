import { Router } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { UserController } from './controllers/UserController'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new UserController()

router.post('/login', authenticateUserController.create)

router.post('/users', userController.createUser)
router.get('/users', userController.listUsers)
router.get('/users/:id', userController.listUserFindId)

export { router }
