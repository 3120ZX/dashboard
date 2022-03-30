const express = require('express')
const app = express()
//const path = require('path')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

console.log('Server start/restart')
console.log('listening to port 8000')
console.log('')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
//app.use(express.json())


app.get('/dashboard', (req, res) => {
    console.log('Viewing Hello World')
	res.render('dashboard.html',{text: 'TESTING'})
})

const login = require('./routes/admin_login')
app.use('/admin_login',login)

app.listen(8000)