'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    // メッセージ入力イベント（sendMessageEvent）を受信する
    socket.on('sendMessageEvent', function (message, userName) {
        if (!message || !userName) {
            return;
        }

        console.log('クライアントの入力値：' + userName + message);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        io.sockets.emit('receiveMessageEvent', message, userName);

    });
};
