'use strict';

module.exports = function (socket) {  

    // 自クライアントに入室イベント（enteringMyselfEvent）を送信する
    socket.on('sendEnterEvent', function(userName, position) {
        socket.broadcast.emit('receiveEnterEvent', userName + 'さん（' + position +'）が入室しました。');
    });
    
};
