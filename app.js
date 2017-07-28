const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const mongoose = require('mongoose')
const cors = require('koa-cors')

const index = require('./routes/index')
const dashboard = require('./routes/dashboard')

const publicApi = require('./routes/api/public')
const privateApi = require('./routes/api/private')


// mongoose promise setup
mongoose.Promise = global.Promise

// error handler
onerror(app)

// middlewares
app.use(helmet())
app.use(cors())
app.use(helmet.noCache())
app.use(helmet.hidePoweredBy({ setTo: 'Phusion Passenger 5.0.30' }))
app.use(bodyparser)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(dashboard.routes(), dashboard.allowedMethods())
app.use(publicApi.routes(), publicApi.allowedMethods())
app.use(privateApi.routes(), privateApi.allowedMethods())

module.exports = app
