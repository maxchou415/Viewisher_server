// Private API Route

const router = require('koa-router')()
const Article = require('../../models/articleSchema')

router.prefix('/api/v1/private')

router.get('/', async (ctx, next) => {
  ctx.body = {
    'error' : 'false',
    'data' : 'Nothing here'
  }
})

router.post('/article/create', async (ctx, next) => {
  let title = ctx.request.body.title
  let content = ctx.request.body.content
  let author = ctx.request.body.author
  let category = ctx.request.body.category
  let featurePhoto = ctx.request.body.featurePhoto
  let showTime = Date.now()
  let postBy = 'test'
  let created_at = Date.now()

  let newArticleObj = {
    title,
    content,
    author,
    category,
    featurePhoto,
    showTime,
    postBy,
    created_at
  }

  let newArticle = await Article.create(newArticleObj)
  console.log(newArticle)
})

module.exports = router
