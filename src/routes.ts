import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserController.create)
router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.create
)
router.post('/login', authenticateUserController.create)
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.create
)

export { router }
