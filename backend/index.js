var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(router.routes())
  .use(router.allowedMethods());


router.get('/ejemplo', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app.listen(3000);