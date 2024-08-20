const express = require("express")

const abc = express()

const PORT = process.env.PORT || 5000

abc.listen(PORT, ()=> {
    console.log(`hello ${PORT}`)
})

const xd = [1, 3, 7, 42, 99]

abc.get("/sterux", (request, response)=> {
    response.json(xd)
})

const wd = [
    { "name": "Alice", "age": 30, "occupation": "Engineer" },
    { "name": "Bob", "age": 25, "occupation": "Designer" }
    ]
abc.get("/goals", (request, response)=> {
    response.json(wd)
})

const fd = ["JavaScript", "Python", "Java", "C++", "Ruby"]

abc.get("/success", (request, response)=> {
    response.json(fd)
})

