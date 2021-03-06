const { prototype } = require("events")
const express=require("express")
const app=express()
const server=require("http").Server(app)
const {v4 :uuidv4}=require("uuid")
app.set("view engine","ejs")
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.redirect(`/${uuidv4()}`)
})
// here we get a url like this /234-234rwed-234d
// which will then go to this function app.get("room")
// and the room.ejs is rendered 
app.get('/:room',(req,res)=>{
    res.render("room",{roomId:req.params.room})
})




server.listen(3030 || process.env.PORT)

