const { Router } = require('express')
const router = Router()

const alimentosCtrl = require('../controllers/alimentoController.js')

router.get('/', alimentosCtrl.getAlimentos)
router.get('/getNumeroAlimentos', alimentosCtrl.getNumeroAlimentos)
router.post('/create', alimentosCtrl.createAlimento)
router.get('/getAlimento', alimentosCtrl.getAlimentoById)
// router.put('/update', alimentosCtrl.editAlimento)

// router.delete('/:id', alimentosCtrl.deleteAlimento)

module.exports = router