const { Router } = require('express')
const router = Router()

const usersCtrl = require('../controllers/userController.js')

router.get('/', usersCtrl.getUsers)
router.post('/register', usersCtrl.createUser)
router.post('/login', usersCtrl.loginUser)
router.post('/authenticate', usersCtrl.authenticate)
router.get('/getUser', usersCtrl.getUser)
router.put('/:id', usersCtrl.editUser)

router.delete('/:id', usersCtrl.deleteUser)

module.exports = router