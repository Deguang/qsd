const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

// log request url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route
router.get('/hello/:name', async (ctx, next) => {
    const name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>`;
})

// add router middleware
app.use(router.routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Frontend server started at port: ${PORT}`)
})