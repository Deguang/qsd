const path = require('path');
const router = require('koa-router')();
const view = require('../utils/view');
// const {query} = require('../utils/mysql');


// 首页
router.get(['/', '/index'], async (ctx, next) => {
    const v = view.render('./views/home.njk');
    await ((ctx, v) => {
        ctx.body = v;
    })(ctx, v);
});

// 404
router.get('*', async (ctx, next) => {
    const v = view.render('./static/404.html', {msg: 'rainning'});
    await ((ctx, v) => {
        ctx.body = v;
    })(ctx, v);
});

module.exports = router;