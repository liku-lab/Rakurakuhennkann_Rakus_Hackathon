'use strict';

module.exports = function (server) {
    const sqlite3 = require("sqlite3");
    const db = new sqlite3.Database("./test.db");
    let data;

    db.serialize(() => {
        db.all("select * from message", (err, rows) => {
            console.log(JSON.stringify(rows));
        });
        db.get("select name from users", (err, count) => {

        })
    });

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);

    io.sockets.on('connection', function (socket) {
        // 投稿モジュールの呼出
        require('./publish')(socket, io);

        // 入室モジュールの呼出
        require('./enter')(socket);

        // 退室モジュールの呼出
        require('./exit')(socket);
    });
};