const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const fs = require('fs')
const PORT = process.env.PORT || 3001
const fileDir = __dirname+"/items.json"
const tagFileDir = __dirname+"/tags.json"


app.get('get/items', (req, res) => {
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

app.post('add/item', (req, res) => {

    const name = req.body.name
    const tag = req.body.tag

    const raw = fs.readFileSync(fileDir)
    let items = JSON.parse(raw)

    const nextID = generateID(items)

    const newItem = {
        id: nextID.toString(),
        name: name,
        completed: false,
        tag: tag
    }

    items.push(newItem)
    const newFile = JSON.stringify(items, null, 2)

    fs.writeFileSync(fileDir, newFile)

    return res.json(newItem)
})

app.get('get/tags', (req, res) => {
    const raw = fs.readFileSync(tagFileDir)
    const tags = JSON.parse(raw)

    return res.send(tags)
})

app.put('toggle/item', (req, res) => {

    const id = req.body.id
    console.log(typeof(id), id)    
    const raw = fs.readFileSync(fileDir)
    let items = JSON.parse(raw)

    items.forEach( item => {
        if(item.id === id)
            item.completed = !item.completed
    })

    const newFile = JSON.stringify(items, null, 2)
    fs.writeFileSync(fileDir, newFile)

    return res.send(id)
})

app.put('delete/item', (req, res) => {
    const id = req.body.id

    const raw = fs.readFileSync(fileDir)
    let items = JSON.parse(raw)

    items = items.filter( i => i.id !== id )

    console.log(items)

    const newFile = JSON.stringify(items, null, 2)
    fs.writeFileSync(fileDir, newFile)

    return res.send(id)
})

app.post('add/tag', (req, res) => {
    const tag = req.body
    console.log(req.body)

    const raw = fs.readFileSync(tagFileDir)
    let tags = JSON.parse(raw)

    tags = [...tags, tag]
    const newFile = JSON.stringify(tags, null, 2)

    fs.writeFileSync(tagFileDir, newFile)

    return res.json(tag)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.use(express.static("build"))