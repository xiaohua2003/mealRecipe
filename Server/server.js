const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const PORT=3000
const app=express()
app.use(bodyParser.json())
app.use(cors())
let data={
}
app.post('/order', function(req, res){
    data=req.body
    console.log(req.body)
    res.status(200).send({'message':"data received"})
})
app.get('/order', function(req, res){
    res.status(200).send(data)
})
app.listen(PORT, function(){
    console.log("server running on localhost:" +PORT)
})