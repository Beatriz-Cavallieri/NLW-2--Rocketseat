import express from 'express'

const app = express()

app.use(express.json())

app.post('/users', (req, res) => {
    const users = [
        { name: 'Bia', age: 30 },
        {name: 'Maria', age: 67 },
    ]
    return res.json(users)
})

app.listen(3333)

