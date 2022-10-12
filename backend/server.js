const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

// body parser middleware
app.use(express.json())
// body parser middleware to accept urlencoded form
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

//use errorhandler
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
