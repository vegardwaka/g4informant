const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/adduser",(req, res) => {
    console.log(req.body)
    res.send("respond received:" + req.body)
})

app.listen(4000, () => console.log("server found 4000"))