const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const fs = require('fs')
const PORT = process.env.PORT || 3001
const fileDir = __dirname+"/items.json"

app.get('/get/items', (req, res) => {
    const raw = fs.readFileSync(fileDir)
    const data = JSON.parse(raw)
    return res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})