'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitOtherEvent', function (data) {
        socket.broadcast.emit('receiveExitOtherEvent', data);
    });
};
