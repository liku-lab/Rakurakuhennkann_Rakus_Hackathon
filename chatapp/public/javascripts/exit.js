'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = '';
    // 退室メッセージイベントを送信する
    socket.emit('sendExitOtherEvent', '他のクライアントが退出しました');
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitOtherEvent', function (data) {
    $('#thread').prepend('<p>' + data +'</p>');
});
