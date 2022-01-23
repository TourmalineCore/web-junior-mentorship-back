const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let lastClientId = 4

const clients = [
  {
    id: 1,
    name: 'Bombaster'
  },
  {
    id: 2,
    name: 'Lowcoaster'
  },
  {
    id: 3,
    name: 'Joomanji'
  },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/clients', (req, res) => {
  res.send(clients)
})

app.post('/clients', (req, res) => {
  const newClient = {
    id: lastClientId++,
    name: req.body.name,
  }

  clients.push(newClient)
  
  res.send({
    id: newClient.id
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
