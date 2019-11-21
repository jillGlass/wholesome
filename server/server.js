const path = require('path')
const express = require('express')
const db = require('./db/db')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/:id', (req, res) => {
  const promptId = Number(req.params.id)
  db.getPromptById(promptId)
    .then(p => res.json(p))
    .catch(err => res.status(500).send('Never have I ever had a database error' + err.message))
})
