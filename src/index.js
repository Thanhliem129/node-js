const express = require('express') 
// const morgan = require('morgan') 
const path = require('path') 
const route =  require('./routes') 
const handlebars = require('express-handlebars') 
const db = require('./config/db/index') 

const app = express()

const port = 3000

// app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', handlebars.engine({
  extname: '.hbs'
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/screens','views'))

//route
route(app)
db.connect()

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})