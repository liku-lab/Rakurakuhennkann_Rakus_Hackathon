'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    // メッセージ入力イベント（sendMessageEvent）を受信する
    socket.on('sendMessageEvent', function (data) {
        if (!data) {
            return;
        }

        console.log('クライアントの入力値：' + data);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        io.sockets.emit('receiveMessageEvent', data);

    });
};
