const { Router } = require('express')
const router = Router()

const recetasSimplesCtrl = require('../controllers/recetaSimpleController.js')

router.get('/', recetasSimplesCtrl.getRecetas)
router.get('/getNumeroRecetas', recetasSimplesCtrl.getNumeroRecetas)
router.post('/create', recetasSimplesCtrl.createReceta)
router.get('/getReceta', recetasSimplesCtrl.getRecetaById)
// router.put('/update', recetasSimplesCtrl.editReceta)

// router.delete('/:id', recetasSimplesCtrl.deleteReceta)

module.exports = router