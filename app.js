import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || process.env.SERVERPORT

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Welcome to photo swift app')
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))