'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function(userName){
        socket.broadcast.emit('receiveExitEvent', userName + 'さんが退出しました。');
    });
};
