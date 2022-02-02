const express = require('express')
const router = express.Router()
const { createData, feedData, serveData } = require('../controllers/method_funcs')


router.get('/create', createData)


router.post('/save', feedData)

router.get('/', serveData)

module.exports = router
