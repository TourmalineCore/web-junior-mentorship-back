const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/clients', (req, res) => {
  res.send([
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
  ])
})

app.post('/clients', (req, res) => {
  console.log(req.body);
  res.send({
    id: 4
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
