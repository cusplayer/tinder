import dotenv from 'dotenv' //config
import express from 'express' //framwork backend
import mongoose from 'mongoose' // framework db
import Card from './models/Card.js'
import cors from 'cors' // чтобы обойти cors защиту

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json()) //middleware
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/cards', (req, res) => {
  const card = req.body
  Card.create(card, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/cards', (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => console.log(`Server has been started on port ${port}`))