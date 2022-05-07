const { Router } = require('express')
const router = Router()

const recetasCtrl = require('../controllers/recetaController.js')

router.get('/', recetasCtrl.getRecetas)
router.get('/getNumeroRecetas', recetasCtrl.getNumeroRecetas)
router.post('/create', recetasCtrl.createReceta)
router.get('/getReceta', recetasCtrl.getRecetaById)
router.get('/getRecetasByCategoria', recetasCtrl.getRecetasByCategoria)
// router.put('/update', recetasCtrl.editReceta)

// router.delete('/:id', recetasCtrl.deleteReceta)

module.exports = router