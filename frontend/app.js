const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const router = require('./routes');

const app = new Koa();
app.use(bodyParser());

const staticPath = './static';
app.use(static(
    path.join( __dirname,  staticPath)
));

// log request url
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add router middleware
app.use(router.routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Frontend server started at port: ${PORT}`)
})