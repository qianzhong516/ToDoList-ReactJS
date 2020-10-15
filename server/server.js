const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const fs = require('fs')
const PORT = process.env.PORT || 3001
const fileDir = __dirname+"/items.json"
const tagFileDir = __dirname+"/tags.json"

app.get('/get/items', (req, res) => {
    const raw = fs.readFileSync(fileDir)
    const data = JSON.parse(raw)
    return res.json(data)
})

const generateID = (items) => {
    const maxID = items.reduce(
        (max, item) => (
            Number(item.id) > max ? Number(item.id) : max
        ), items[0].id
    )
    return maxID+1
}

app.post('/add/item', (req, res) => {

    const name = req.body.name

    const raw = fs.readFileSync(fileDir)
    let items = JSON.parse(raw)

    const nextID = generateID(items)

    const newItem = {
        id: nextID,
        name: name,
        completed: false,
        tag: "housework"
    }

    items.push(newItem)
    const newFile = JSON.stringify(items, null, 2)

    fs.writeFileSync(fileDir, newFile)

    return res.json(req.body)
})

app.get('/get/tags', (req, res) => {
    const raw = fs.readFileSync(tagFileDir)
    const tags = JSON.parse(raw)

    return res.send(tags)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})