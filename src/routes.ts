import { Router } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { UserController } from './controllers/UserController'
import { PetController } from './controllers/PetController'
import { CustomerController } from './controllers/CustomerController'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const userController = new UserController()
const petController = new PetController()
const customerController = new CustomerController()

router.post('/login', authenticateUserController.create)

router.post('/users', userController.createUser)
router.get('/users', userController.listUsers)
router.get('/users/:id', userController.listUserFindId)

router.post('/pets', petController.createPet)
router.get('/pets', petController.listPets)
router.get('/pets/:id', petController.listPetFindId)

router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.listCustomers)
router.get('/customers/:id', customerController.listCustomerFindId)

export { router }
