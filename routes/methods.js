const express = require('express')
const router = express.Router()
const { createData, feedData, serveData, feedCom } = require('../controllers/method_funcs')


router.get('/create', createData)


router.post('/save', feedData)

router.get('/', serveData)

router.post('/feedCom', feedCom)

module.exports = router
