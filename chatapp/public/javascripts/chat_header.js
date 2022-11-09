const position = $('#position').val();
var textForm = document.getElementById("chat-header");

if(position == '上司'){
  textForm.innerHTML = '田中さん（部下）';
}
else{
  textForm.innerHTML = '佐藤さん（上司）';
}
