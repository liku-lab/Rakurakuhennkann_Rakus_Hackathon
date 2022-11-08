const position = $('#position').val();
var textForm = document.getElementById("chat-header");

if(position == '上司'){
  textForm.innerHTML = '田中さん';
}
else{
  textForm.innerHTML = '佐藤さん';
}
