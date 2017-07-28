const router = require('koa-router')()

router.prefix('/dashboard')

router.get('/', async (ctx, next) => {
  ctx.body = 'this is a users response!'
})

module.exports = router
