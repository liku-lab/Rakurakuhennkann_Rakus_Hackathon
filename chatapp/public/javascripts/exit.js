'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 役職取得
    const position = $('#position').val();
    // 体質メッセージイベントを送信する
    socket.emit('sendExitEvent', userName, position);
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data) {
    $('#thread').prepend(
        '<div class="exit-message d-flex justify-content-center"><p class="text-center p-2 ms-2 mb-0">' + data + '</p></div>'
    );
});
