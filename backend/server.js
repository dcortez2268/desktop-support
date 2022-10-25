const path = require('path')
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

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    // set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    // loading html in build folder
    app.get('*', (req, res) =>
        res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
    )
} else {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to the Support Desk API' })
    })
}

//use errorhandler
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
