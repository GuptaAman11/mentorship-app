const express = require('express')
const app = express()
const { Connection } = require('./db')
const userRoutes = require('./routes/user')
const mentorRoutes = require('./routes/mentor')
const cors = require('cors')




app.listen(8000, () => {
    console.log("server started")
})
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static('uploads'))

Connection()


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/mentors', mentorRoutes);

