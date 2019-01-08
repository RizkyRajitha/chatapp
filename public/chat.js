const socket = io.connect("http://localhost:3000");

//var send_button = document.querySelector('#send').value;

function emmit() {
  var user = document.getElementById("user").value; //document.querySelector('#user').value;
  var body = document.querySelector("#body").value;
  //   console.log("hahhahha");
  //   console.log(user);
  //   console.log(body);

  message = {
    mesUser: user,
    mesBody: body
  };

  socket.emit("chat", message);
  console.log(message);
}

socket.on("chat", data => {
  //var resmsg = ;
  document.querySelector(".feedback").innerHTML = "";
  document.querySelector(".recivemassges").innerHTML += "<p>";
  document.querySelector(".recivemassges").innerHTML +=
    "<strong>" + data.mesUser + "</strong> - " + data.mesBody + "<br>";
  document.querySelector(".recivemassges").innerHTML += "</p>";
});

document.querySelector('#body').addEventListener('keypress',()=>{
    var user = document.getElementById("user").value;
    socket.emit('typing',user);
})

socket.on('typing',(data)=>{
    console.log(data);
    document.querySelector(".feedback").innerHTML = data+"is typing .. ";
    
})