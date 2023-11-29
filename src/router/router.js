const express = require('express')
const router = express.Router()
const Menucontroller = require('../controller/controller.js')

router.post('/', Menucontroller.postFoodItems)
router.get('/', Menucontroller.getallFoods)
router.get('/:id', Menucontroller.getbyIdFoodItems)
router.put('/:id', Menucontroller.updateFoodItemsbyId)
router.delete('/:id', Menucontroller.deleteFooditembyId)

module.exports = router;