const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const { setStatics } = require('./utils/statics')
const adminRoutes = require('./routes/admin')

const app = express()

// Middlewares
app.use(bodyParser.urlencoded())
//End Of Middleware

// EJS
app.set('view engine', 'ejs')
app.set('views', 'views')
// End of EJS

// Statics
setStatics(app)
// End of Statics

// Routes
app.use('/admin', adminRoutes)
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'کارهای روزمره' })
})
// End of Routes


app.listen(3000, () => console.log("Server is running"))