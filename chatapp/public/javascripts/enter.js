'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 役職取得
const position = $('#position').val();
// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent', userName, position);


// サーバから受信した入室メッセージを画面上に表示する
/*
socket.on('enterMyselfEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
*/

socket.on('receiveEnterEvent', function (data) {
    $('#thread').prepend(
        '<div class="enter-message d-flex justify-content-center"><p class="text-center p-2 ms-2 mb-0">' + data + '</p></div>'
    );
});
