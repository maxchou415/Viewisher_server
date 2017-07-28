// Public API Route

const router = require('koa-router')()

const Article = require('../../models/articleSchema')

router.prefix('/api/v1/public')

// Query all article
router.get('/article/all', async (ctx, next) => {
  try {
    let article = await Article.find({}, 'title content author category featurePhoto showTime').sort({'created_at' : 'desc'})
    ctx.status = 200
    ctx.body = {
      'error' : 'false',
      'data' : article
    }

  } catch (e) {
    console.log(e)
    ctx.status = 500
    ctx.body = {
      'error' : 'true',
      'data' : 'fetch article error'
    }
  }
})

// Query article by title or articleId
router.get('/article/:titleOrId', async (ctx, next) => {
  let titleOrId = ctx.params.titleOrId
  try {
    // Query title or articleId
    let article = await Article.find({ $or: [{'title': titleOrId}, {'articleId': titleOrId}] }, 'title content author category featurePhoto showTime').sort({'created_at' : 'desc'})

    ctx.status = 200
    ctx.body = {
      'error' : 'false',
      'data' : article
    }

  } catch (e) {
    console.log(e)
    ctx.status = 500
    ctx.body = {
      'error' : 'true',
      'data' : 'fetch article error'
    }
  }
})

// Query article by category
router.get('/article/category/:category', async (ctx, next) => {
  let category = ctx.params.category
  try {
    let article = await Article.find({ 'category' : category }, 'title content author category featurePhoto showTime').sort({'created_at' : 'desc'})
    ctx.status = 200
    ctx.body = {
      'error' : 'false',
      'data' : article
    }
  } catch (e) {
    console.log(e)
    ctx.status = 500
    ctx.body = {
      'error' : 'true',
      'data' : 'fetch article error'
    }
  }
})

module.exports = router
