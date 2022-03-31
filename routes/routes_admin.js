const express = require('express')
const Admin = require('./../models/admin')
const router = express.Router()

router.get('/', (req, res) => {
	console.log('Viewing admin panel')
	res.render('../views/admin/admin.html')
})

router.get('/login', (req, res) => {
	console.log('Viewing Login Page')
	res.render('../views/admin/login.html')
})

router.get('/change_password', (req, res) => {
	console.log('Viewing admin change password panel')
	res.render('../views/admin/change_password.html')
})

router.get('/register', (req, res) => {
	console.log('Viewing admin register panel')
	res.render('../views/admin/register.html')
})

router.get('/success', (req, res) => {
	console.log('Viewing successs panel')
	res.render('../views/admin/success.html')
})

router.post('/register', async(req,res) => {
	const admin = new Admin({
		username : req.body.username,
		password : req.body.password
	})
	try{
		console.log('Register Post')
		admin = await admin.save()
		res.redirect('/admin')
	}
	catch (e) {
		res.render('../views/admin/register.html')
	}
})

module.exports = router