const Collaborator = require('../models/collaborators')
const { multipleObject, mongooOject } = require('../../ulti/mongoose')

class SiteController {
  //[GET]  /
  index (req, res, next){
    Collaborator.find({})
      .then(collaborators => {
        res.render('home', { collaborators: multipleObject(collaborators) })
      })
      .catch(next)
  }
  
  //[GET] /search
  search (req, res){
    res.render('search')
  }
}

module.exports = new SiteController