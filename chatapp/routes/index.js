'use strict';

const express = require('express');
const router = express.Router();

// function getMessageData(){
//     const sqlite3 = require("sqlite3");
//     const db = new sqlite3.Database("./test.db");
    
//     let sql = `SELECT * FROM messages WHERE id  = (SELECT MAX(id) FROM messages)`;

//     db.serialize(() => {
//         db.get(sql, [], (err, row) => {
//         if (err) {
//             return console.error(err.message);
//         }
//             data = row.content;
//         });
//     });
//     console.log("12345:" + data);
//     return data;
// };

const getData = () => {
    const sqlite3 = require("sqlite3");
    const db = new sqlite3.Database("./test.db");

	return new Promise((resolve, reject) => {
		db.serialize(() => {
			db.get(`SELECT * FROM messages WHERE id  = (SELECT MAX(id) FROM messages)`, [], (err, rows) => {
				if (err) reject(err);
				resolve(rows);
			});
		});
	});
};

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
    let promise = getData();
    var data;
    promise.then((results) => {
        // console.log(results.content);
        data = results;
    });
    promise.then(() => {
        console.log(data);
        var content;
        var name;

        (request.body.position === '上司') ? name = "田中" : name = "佐藤";
        if (data !== undefined) {
            (request.body.position === '部下' && data.user_id === 1) ? content = data.convert_content : content = data.original_content;
            (request.body.position === '上司' && data.user_id === 2) ? content = data.convert_content : content = data.original_content;
        } else {
            content = "なし";
        }
        response.render('person', { userName: request.body.userName, position: request.body.position, content: content, name: name });
    })
});

module.exports = router;
