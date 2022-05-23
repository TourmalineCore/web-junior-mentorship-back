const express = require(`express`)
const cors = require(`cors`)
const bodyParser = require(`body-parser`)

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let lastClientId = 4

const clients = [
  {
    id: 1,
    name: `Bombaster`,
    description: `Great thing`,
  },
  {
    id: 2,
    name: `Lowcoaster`,
    description: `Cheap`,
  },
  {
    id: 3,
    name: `Joomanji`,
    description: ``,
  },
]

app.get(`/`, (req, res) => {
  res.send(`Hello World!`)
})

app.get(`/clients`, (req, res) => {
  const {
    searchTerm = ``
  } = req.query

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()

  res.send(clients.filter(client => !normalizedSearchTerm || client.name.toLowerCase().includes(normalizedSearchTerm)))
})

app.post(`/clients`, (req, res) => {
  const {
    name,
    description = ``, 
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

app.post(`/clients/:id`, (req, res) => {
  const clientId = parseInt(req.params.id)

  const {
    name,
    description = ``, 
  } = req.body

  const client = clients.find(client => client.id === clientId)

  if(client) {
    client.name = name,
    client.description = description
    
    res.send(true);
  } else {
    res.send(false);
  }
})


app.delete(`/clients/:id`, (req, res) => {
  const clientId = parseInt(req.params.id);

  const clientToDeleteIndex = clients.findIndex(client => client.id === clientId);

  if(clientToDeleteIndex !== -1) {
    clients.splice(clientToDeleteIndex, 1);
    res.send(true);
  } else {
    res.send(false);
  }
})

app.get(`/clients/:id`, (req, res) => {
  const clientId = parseInt(req.params.id);
  
  const client = clients.find(client => client.id === clientId);

  res.send(client)
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}. Available at http://localhost:5000`)
})
