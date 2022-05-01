const express = require('express')
const router = express.Router()
const { createData, feedData, serveData, feedCom , fetchCom, forReact} = require('../controllers/method_funcs')


router.get('/create', createData)

router.post('/save', feedData)

router.get('/', serveData)

router.post('/feedCom', feedCom)

router.post('/fetchCom', fetchCom)

router.get('/forreact', forReact)

module.exports = router
