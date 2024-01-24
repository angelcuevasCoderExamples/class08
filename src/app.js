const express = require('express');
const port = 8080; 
const usersRouter = require('./routes/users.router')
const petsRouter = require('./routes/pets.router')

const app = express();

app.use((req, res, next)=>{
    console.log(req.method, req.url)
    next()
})

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(__dirname+'/public')) // <------la carpeta public ahora es de acceso público


app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)


app.listen(port, ()=>console.log(`Server up and running on port ${port}`))