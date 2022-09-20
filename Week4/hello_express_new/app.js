const express = require("express")


const app = express()
const PORT = 8000

app.get("/", (req, res) =>{
    res.send("Hello World!")
    res.status(400)

    // res.json{
    //     message: "Hello World!:"
    // }
})

app.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${PORT}`)
})