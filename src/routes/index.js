const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')

const route = (app) => {

  app.use('/news', newsRouter)
  app.use('/', siteRouter)
  app.use('/user', userRouter)

}
module.exports = route