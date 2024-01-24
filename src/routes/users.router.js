const {Router} = require('express');
const {upload} = require('../utils')


const router = Router();

let users = [];

router.get('/',(req, res)=>{
    res.send({users: users})
})

router.post('/', upload.single('photo'), (req, res)=>{
    const user = req.body; 
    users.push(user);
    console.log(req.file)
    res.send({status:'success'})
})


module.exports = router;