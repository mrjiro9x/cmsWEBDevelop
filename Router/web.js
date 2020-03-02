const router = require('express').Router()
const test = require('../Apps/Controllers/test')

router.get('/', test.test)

module.exports = router
