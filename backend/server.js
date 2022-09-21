const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

// Connect to database
connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello')
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
