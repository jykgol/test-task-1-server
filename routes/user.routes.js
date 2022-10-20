const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/table', userController.createTableData)
router.get('/table', userController.getTableData)
router.delete('/table/:id', userController.deleteTableData)

module.exports = router