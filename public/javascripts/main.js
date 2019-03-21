var socket = io.connect('http://localhost:3000',{'forceNew':true});

var stat = 'login';
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

function getProfileTemplate(profile){
  var html = profile.map((elem, index)=>{
    return(`<div>
          <h1>Hola ${profile.firstname}!</h1>
          <p>Te has logueado.</p>
          <div class="form-group">
            <button id="logout" class="btn btn-danger">Logout</button>
          </div>
       </div>`);
  }).join(' ');
}

function profileController(){
  document.getElemtById('logout')
  .addEventListener('click', function(e){
    e.preventDefault();
    socket.emit('user.logout');
    delete localStorage.token;
    getRoute();
  });
}

function getCreateAccountTemplate(){
  var html = profile.map((elem, index)=>{
    return(`<form id="create-account-form">
              <h1>Crear cuenta</h1>
              <div class="form-group">
                <label>Nombre</label>
                <input id="firstname" class="form-control"/>
              </div>
              <div class="form-group">
                <label>Apellido</label>
                <input id="lastname" class="form-control"/>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input id="email" type="email" class="form-control"/>
              </div>
              <div class="form-group">
                <label>Contraseña</label>
                <input id="password" type="password" class="form-control"/>
              </div>
              <div class="form-group">
                <button id="logout" class="btn btn-success">Crear Cuenta</button>
                &nbsp; or &nbsp;
                <a href="#/" class="btn btn-default">Login</a>
              </div>
              <div id="messages"></div>
          </form>`);
  }).join(' ');
}

function render(data){
    var html = data.map((elem,index)=>{
      return(`<div id="m">
      <strong>${elem.author}</strong>:
      <em>${elem.text}</em>
      </div>`);
      }).join(' ');

    document.getElementById('messages').innerHTML=html;
}

//Funcion de autenticación de usuario
function addMessage(e){
    console.log(document.getElementById('texto').value);
    document.getElementById('but').disabled = true;
    var data ={
        user: document.getElementById('texto').value,
        password : document.getElementById('pass').value
    };
    console.log('emitting new message');
  
    socket.emit('user.login', data);
    return false;
}

function changeType(e){

}