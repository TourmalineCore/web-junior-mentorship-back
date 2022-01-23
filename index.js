const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
