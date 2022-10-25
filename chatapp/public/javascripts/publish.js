'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    // メッセージを取得
    const position = '上司'

    // 自クライアントに投稿内容を送信する
    socket.emit('sendMessageEvent', message, userName, position);
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMyselfMessageEvent', function (message, userName, position) {
    // 画面上にメッセージを表示
    $('#thread').prepend(`<p>${userName}さん (${position})： ${message}</p>`);
});

socket.on('receiveOtherMessageEvent', function (message, userName, position) {
    // 画面上にメッセージを表示
    $('#thread').prepend(`<p>${userName}さん (${position})： ${message}</p>`);
});