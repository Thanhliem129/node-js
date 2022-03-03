const Collaborator = require('../models/collaborators')
const { multipleObject, mongooOject } = require('../../ulti/mongoose')

class UserController {
  //[GET]  /
  index (req, res, next){
    Collaborator.findOne({ slug : req.params.slug})
      .then(collaborators => {
        console.log(mongooOject(collaborators))
        res.render('userDetail', { collaborators: mongooOject(collaborators) })
        // res.json(collaborators)
      })
      .catch(next)
      
  }
  
}
module.exports = new UserController