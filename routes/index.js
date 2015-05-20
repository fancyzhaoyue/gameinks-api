'use strict';
/**
 * Module dependencies.
 */
var express = require('express');

var router = express.Router();
var userCtrl = require('../controllers/user');
var gameCtrl = require('../controllers/game');
var cateCtrl = require('../controllers/category');

router.get('/', function(req, res){ res.send('<h1>Gameinks API</h1>'); });


// 游戏列表
router.get('/games', gameCtrl.list);

// 游戏新增
router.post('/games', gameCtrl.create);

// 游戏详情
router.get('/games/:gameId', gameCtrl.show);

// 更新游戏
router.put('/games/:gameId', gameCtrl.update);

// 删除游戏
router.delete('/games/:gameId', gameCtrl.delete);

// 游戏ID参数
router.param('gameId', gameCtrl.gameById);

// 查询分类
router.get('/categories', cateCtrl.list)

// 创建分类
router.post('/categories', cateCtrl.create);

// 分类详情
router.get('/categories/:categoryId', cateCtrl.show);

// 分类ID参数
router.param('categoryId', cateCtrl.categoryById);


// 正常返回
router.use(function(req, res, next) {
    res.send({
        retcode: 200,
        retmsg: '',
        data: res.locals.data
    });
});

// 错误处理
router.use(function(err, req, res, next){
    res.send({
        retcode: 500,
        retmsg: err
    });
})
module.exports = router;