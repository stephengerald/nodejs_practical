const express = require("express")

const abc = express()

const PORT = process.env.PORT || 5000

abc.listen(PORT, ()=> {
    console.log(`hello ${PORT}`)
})

const xd = [1, 2, 3]

abc.get("/sterux", (request, response)=> {
    response.json(`hello stephen, you are numer ${xd[0]}`)
})

const wd = {
    name: "Alice", 
    age: 30
}
abc.get("/goals", (request, response)=> {
    response.json(wd)
})

abc.get("/success", (request, response)=> {
    response.json(`${xd}`)
})

