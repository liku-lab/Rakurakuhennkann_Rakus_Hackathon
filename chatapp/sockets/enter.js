'use strict';

module.exports = function (socket) {  

    // 自クライアントに入室イベント（enteringMyselfEvent）を送信する
    socket.on('sendEnterEvent', function(userName){
        socket.broadcast.emit('receiveEnterEvent', userName + 'さんが入室しました。');
    });
    
};
