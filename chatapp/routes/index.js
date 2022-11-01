'use strict';

const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function (request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function (request, response, next) {
    console.log('ユーザ名：' + request.body.userName + request.body.position);
    response.render('room', { userName: request.body.userName, position: request.body.position });
});

// 誰に送るかの画面の表示
router.post('/person', function (request, response, next) {
    console.log('ユーザ名：' + request.body.userName + request.body.position);
    response.render('person', { userName: request.body.userName, position: request.body.position });
});

module.exports = router;
