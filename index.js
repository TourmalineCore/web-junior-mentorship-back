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
    name: 'Bombaster',
    description: 'Great thing',
  },
  {
    id: 2,
    name: 'Lowcoaster',
    description: 'Cheap',
  },
  {
    id: 3,
    name: 'Joomanji',
    description: '',
  },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/clients', (req, res) => {
  res.send(clients)
})

app.post('/clients', (req, res) => {
  const {
    name,
    description = '', 
  } = req.body

  const newClient = {
    id: lastClientId++,
    name,
    description,
  }

  clients.push(newClient)
  
  res.send({
    id: newClient.id
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. Available at http://localhost:5000`)
})
