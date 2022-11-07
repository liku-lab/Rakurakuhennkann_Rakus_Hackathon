'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    var textForm = document.getElementById("message");
    textForm.value = '';
    // メッセージを取得
    const position = '上司'

    // 自クライアントに投稿内容を送信する
    socket.emit('sendMessageEvent', message, userName, position);
    
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMyselfMessageEvent', function (message, userName, position, datetime) {
    console.log(message)
    // 画面上にメッセージを表示
    $('#thread').append(
        `<div class="message d-flex flex-row-reverse  align-items-start mb-4"> 
            <p class="room-thread text-right p-2 ms-2 mb-0 bg-warning">${message}</p>
            <p class="p-2 me-2 mb-0"><br>${datetime.month}/${datetime.day} ${datetime.hour}:${datetime.minute}</p>
        </div>`);
    

});

socket.on('receiveOtherMessageEvent', function (message, userName, position, datetime) {
    // 画面上にメッセージを表示
    $('#thread').append(
        `<div class="message d-flex flex-row align-items-start mb-4"> 
            <p class="room-thread text-left p-2 me-2 mb-0 bg-white">${message}</p>
            <p class="p-2 me-2 mb-0"><br>${datetime.month}/${datetime.day} ${datetime.hour}:${datetime.minute}</p>
        </div>`);
});