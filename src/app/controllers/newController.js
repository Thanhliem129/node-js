
class NewsController {
  index (req, res){
    res.render('news')
  }
  show (req, res){
    console.log('slug')
    res.send('news')
  }
}

module.exports = new NewsController