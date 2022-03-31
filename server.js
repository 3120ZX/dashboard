if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require ('express-ejs-layouts')
//const path = require('path')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(expressLayouts)
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout.html')

app.use(express.urlencoded({ extended: false }))

//mongoose.connect(process.env.DATABASE_URL, {
mongoose.connect('mongodb://localhost/donbo', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const routes_admin = require('./routes/routes_admin')

console.log('Server start/restart')
console.log('listening to port 8000')
console.log()

//app.use(express.static("public"))

//app.use(express.json())

app.get('/',(req,res) => {
    res.render('index.html')
    console.log('Viewing Dashboard')
})

app.use('/admin',routes_admin)

app.listen(8000)