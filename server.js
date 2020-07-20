const { spawn } = require('child_process')

const Koa = require('koa')
const { json } = require('co-body')

const app = new Koa()

app
  .use(async (ctx, next) => {
    ctx.body = await json(ctx)
    await next()
  })
  .listen(5000, () => {
    spawn('node', ['app.js'], { stdio: 'inherit' })
  })
