import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureadmin'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post('/users', createUserController.create)
router.post('/tags', ensureAdmin, createTagController.create)

export { router }
