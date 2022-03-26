const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	console.log('Viewing Login Page')
	res.render('../views/admin_login.html')
})

module.exports = router