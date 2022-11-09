'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function(userName, position){
        socket.broadcast.emit('receiveExitEvent', userName + 'さん(' + position + ')が退出しました。');
    });
};
