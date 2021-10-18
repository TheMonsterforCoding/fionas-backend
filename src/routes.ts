import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ListUsersController } from './controllers/ListUsersController'
// import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
// import { ensureAdmin } from './middlewares/ensureAdmin'
// import { CreateTagController } from './controllers/CreateTagController'
// import { CreateComplimentController } from './controllers/CreateComplimentController'
// import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
// import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
// import { ListTagsController } from './controllers/ListTagsController'

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const listUsersController = new ListUsersController()
// const createTagController = new CreateTagController()
// const createComplimentController = new CreateComplimentController()
// const listUserSendComplimentsController =
//   new ListUserSendComplimentsController()
// const listUserReceiveComplimentsController =
//   new ListUserReceiveComplimentsController()
// const listTagsController = new ListTagsController()

router.post('/users', createUserController.create)
router.post('/login', authenticateUserController.create)
router.get('/users', listUsersController.listUser)
router.get('/users/:id', listUsersController.listUserFindId)
// router.post(
//   '/tags',
//   ensureAuthenticated,
//   ensureAdmin,
//   createTagController.create
// )
// router.post(
//   '/compliments',
//   ensureAuthenticated,
//   createComplimentController.create
// )
// router.get(
//   '/users/compliments/send',
//   ensureAuthenticated,
//   listUserSendComplimentsController.list
// )
// router.get(
//   '/users/compliments/receive',
//   ensureAuthenticated,
//   listUserReceiveComplimentsController.list
// )
// router.get('/tags', ensureAuthenticated, listTagsController.list)

// router.get('/users', ensureAuthenticated, listUsersController.list)

export { router }
