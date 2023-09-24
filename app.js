const express=require("express");
const app= express();

const listaTareas = [{
    "id":"123456",
    "isCompleted":false,
    "description":"Walk the dog",
}]
app.get("/", (req, res)=>{
    res.send(listaTareas)
})

app.listen(8000, ()=>{
    console.log("Servidor corriendo en ", 8000)
})