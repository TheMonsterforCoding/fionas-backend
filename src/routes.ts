import { Router } from 'express'

const router = Router()

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { UserController } from './controllers/UserController'
import { PetController } from './controllers/PetController'
import { CustomerController } from './controllers/CustomerController'
import { CustomerHasPetController } from './controllers/CustomerHasPetController'
import { EmployeeTypeController } from './controllers/EmployeeTypeController'
import { EmployeeController } from './controllers/EmployeeController'

const authenticateUserController = new AuthenticateUserController()
const userController = new UserController()
const petController = new PetController()
const customerController = new CustomerController()
const customerHasPetController = new CustomerHasPetController()
const employeeTypeController = new EmployeeTypeController()
const employeeController = new EmployeeController()

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

router.post('/customers_has_pets', customerHasPetController.createCustomerHasPet)
router.get('/customers_has_pets', customerHasPetController.listCustomersHasPets)
router.get('/customers_has_pets/:id', customerHasPetController.listCustomerHasPetFindId)

router.post('/employees_type', employeeTypeController.createEmployeeType)
router.get('/employees_type', employeeTypeController.listEmployeesType)
router.get('/employees_type/:id', employeeTypeController.listEmployeeTypeFindId)

router.post('/employees', employeeController.createEmployee)
router.get('/employees', employeeController.listEmployees)
router.get('/employees/:id', employeeController.listEmployeeFindId)

export { router }
