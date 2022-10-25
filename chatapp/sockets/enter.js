'use strict';

module.exports = function (socket) {  

    // 自クライアントに接続イベント（enteringMyselfEvent）を送信する
    socket.on('sendEnterEvent', function(userName){
        socket.broadcast.emit('receiveEnterEvent', userName + 'さんが接続しました。');
    });
    

    // 自クライアント以外に接続イベント（enterOtherEvent）を送信する
    /*
    socket.broadcast.emit('enterOtherEvent', '他のクライアントが接続しました。');
    */
};
