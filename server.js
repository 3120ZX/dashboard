const express = require('express')
const app = express()
//const path = require('path')


console.log('Server start/restart')
console.log('listening to port 8000')
console.log('')


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/dashboard', (req, res) => {
    console.log('Viewing Hello World')
	res.render('dashboard.html',{text: 'TESTING'})
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const login = require('./routes/admin_login')
app.use('/admin_login',login)

const users = require('./routes/users')
app.use('/users',users)

app.listen(8000)