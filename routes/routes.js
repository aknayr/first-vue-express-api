let express = require('express')
let router = express.Router()

// req represents the request the client has made
// res presents the response the server sends back
router.get('/', function(req,res, next){
    res.json( { 'message': 'Welcome to Server Programming!' } )
})

// module.export allows another file to require/access this file/router object
module.exports = router