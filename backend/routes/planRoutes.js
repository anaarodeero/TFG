const { Router } = require('express')
const router = Router()

const planCtrl = require('../controllers/planController.js')

router.get('/getPlan', planCtrl.getMyPlan)
// router.get('/getNumeroRecetas', planCtrl.getNumeroRecetas)
router.post('/create', planCtrl.createPlanRegular)
// router.get('/getReceta', planCtrl.getRecetaById)
// router.put('/update', planCtrl.editReceta)

// router.delete('/:id', planCtrl.deleteReceta)

module.exports = router