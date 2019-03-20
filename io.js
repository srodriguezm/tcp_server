var socket = require('socket.io');

var messages = [];
var ofertas= [];
function startConnection(server){
  var io = socket(server);

  io.on('connection', function(socket){
    console.log('New connection to socket');
    socket.emit('messages', messages);

    //manejo de licitaciones
    socket.on('new-message', function(data){
      console.log('llego1');
      licitacion(data);
      messages.push(data);
      io.sockets.emit('messages', messages);
    });
  });
}
function licitacion(param){
  if(messages.length==0){
    ofertas.push(150000000);
    console.log(ofertas[0]);
    if(asignacion(150000000)){
      param.text = "[Oferta aceptada: $150.000.000]";
    }
    else {
      param.text = "[Oferta rechazada]"
    }
  }
  else{
    let ran=getRndInteger(5000000, 10000000);
    console.log('ran='+ran);
    let top=getTopArray();
    console.log('top='+top);
    let extra=ran+top;
    console.log('extra='+extra);
    ofertas.push(extra);
    if(asignacion(extra)){
      param.text = "[Oferta aceptada: $"+extra+"]";
    }
    else {
      param.text = "[Oferta rechazada]";
    }
  }
}
function asignacion(param){
  let PB=getRndDecimal(0.3,0.8);
  console.log(PB);
  let PO=getRndDecimal(0.3,0.8);
  return PO>PB;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getRndDecimal(min, max) {
  return Math.random() * (max - min) + min;
}
function getTopArray(){
  ofertas.sort(function(a, b){return a - b});
  return ofertas[ofertas.length-1];
}
module.exports.startConnection = startConnection;
