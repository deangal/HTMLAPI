var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var sController = require('./controller/scontroller')
var app = express()


require("./configs/database")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/students',sController)




app.listen(8000,()=>{
    console.log("The server is up");
})