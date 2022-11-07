'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    // メッセージ入力イベント（sendMessageEvent）を受信する
    socket.on('sendMessageEvent', function (message, userName, position) {
        if (!message || !userName) {
            return;
        }
        const sqlite3 = require("sqlite3");
        const db = new sqlite3.Database("./test.db");

        db.serialize(() => {
            db.run("insert into messages(user_id,content,datetime,username_to) values(?,?,?,?)", 1, message, new Date(), "田中");
            db.all("select * from messages", (err, rows) => {
                console.log(JSON.stringify(rows));
            });
        });

        let datetime = new Date(new Date().toLocaleString({timeZone: 'Asia/Tokyo'}));
        let datetimeObject = {month: datetime.getMonth()+1, day: datetime.getDate(), hour: datetime.getHours(), minute: ( '00' + datetime.getMinutes() ).slice(-2)}

        console.log(`クライアントの入力値\n  userName: ${userName}, message: ${message}, datetime: ${new Date()}`);

        let messageMyself = message;

        let messageOther = message;
        
        if (position === '上司') {
            let originalList = ['お疲れ', '承知'];
            let convertList = ['お疲れ様〜。書類間に合いそう？', 'OK。明日の9時までやから頑張って'];
            for (let i = 0; i < originalList.length; i++) {
                if (~messageOther.indexOf(originalList[i])) {
                    messageOther = convertList[i];
                }   
            }
        } else {
            let originalList = ['ごめん', '了解'];
            let convertList = ['申し訳ありません。まだ完成しておりません。', '承知しました。'];
            for (let i = 0; i < originalList.length; i++) {
                if (~messageOther.indexOf(originalList[i])) {
                    messageOther = convertList[i];
                }   
            }
        }

        console.log(messageOther);
        
        // 全クライアントが受信するメッセージ表示イベントを送信する
        socket.emit('receiveMyselfMessageEvent', messageMyself, userName, position, datetimeObject);

        socket.broadcast.emit('receiveOtherMessageEvent', messageOther, userName, position, datetimeObject);

    });


};
