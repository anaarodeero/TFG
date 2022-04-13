const { Router } = require('express')
const router = Router()

const piramideCtrl = require('../controllers/piramideController.js')

router.get('/', piramideCtrl.getPiramides)
router.get('/getPiramide', piramideCtrl.getPiramideById)

module.exports = router