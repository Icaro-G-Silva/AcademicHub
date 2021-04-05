const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.info(`The server is running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})
