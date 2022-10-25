'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    // メッセージ入力イベント（sendMessageEvent）を受信する
    socket.on('sendMessageEvent', function (message, userName, position) {
        if (!message || !userName) {
            return;
        }

        console.log(`クライアントの入力値\n  userName: ${userName}, message: ${message}`);

        let messageMyself = message;

        let messageOther = message;
        
        let originalList = ['どうですか', 'お世話になります'];
        let convertList = ['どんな感じ', '元気してる'];
        for(let i=0; i<originalList.length; i++){
            messageOther = messageOther.replace(originalList[i], convertList[i]);
        }

        console.log(messageOther);
        

        // 全クライアントが受信するメッセージ表示イベントを送信する
        socket.emit('receiveMyselfMessageEvent', messageMyself, userName, position);

        socket.broadcast.emit('receiveOtherMessageEvent', messageOther, userName, position);

    });


};
