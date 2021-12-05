const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const PORT=3000
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.post('/order', function(req, res){
    console.log(req.body)
    res.status(200).send({'message':"data received"})
})
app.listen(PORT, function(){
    console.log("server running on localhost:" +PORT)
})