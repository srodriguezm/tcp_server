var socket = io.connect('http://localhost:3000',{'forceNew':true});

var id ='';
var user='';
var sala='';
socket.on('errorrr',(data)=>{
    alert(data);
});
socket.on('messages', function(data){
  console.log(data);
  render(data, document.getElementById('sala').innerText);
});

function render(data){
    var html = data.map((elem,index)=>{
      return(`<div id="m">
      <strong>${elem.author}</strong>:
      <em>${elem.text}</em>
      </div>`);
      }).join(' ');

    document.getElementById('messages').innerHTML=html;
}

function addMessage(e){
    console.log(document.getElementById('texto').value);
    document.getElementById('but').disabled = true;
    var message ={
        author: document.getElementById('texto').value,
        text : "Oferta"
    };
    console.log('emitting new message');
    socket.emit('new-message', message);
    setTimeout(function(){ document.getElementById('but').disabled = false; }, 30000);
    return false;
}
