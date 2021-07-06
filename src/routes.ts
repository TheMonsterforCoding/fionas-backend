import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController =
  new ListUserSendComplimentsController()
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

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

router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.list
)
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.list
)
router.get('/tags', ensureAuthenticated, listTagsController.list)
router.get('/users', ensureAuthenticated, listUsersController.list)

export { router }
