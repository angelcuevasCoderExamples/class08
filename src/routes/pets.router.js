const {Router} = require('express');
const {upload} = require('../utils')

const router = Router();

let pets = []

router.get('/', (req, res)=>{
    res.send({pets: pets})
})

router.post('/', upload.single('thumbnail'),(req, res)=>{
    const pet = req.body; 
    pet.thumbnail = `http://localhost:8080/imgs/${req.file.originalname}`
    pets.push(pet);
    
    res.send({status: 'success'})
})

module.exports = router; 