var firebaseConfig = {
    apiKey: "AIzaSyB1bSMq3TdIlcMN3sE4llt-BP3lwnlIN2c",
    authDomain: "lets-chat-5bc94.firebaseapp.com",
    databaseURL: "https://lets-chat-5bc94-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5bc94",
    storageBucket: "lets-chat-5bc94.appspot.com",
    messagingSenderId: "229184247804",
    appId: "1:229184247804:web:1752340b84743801e14479",
    measurementId: "G-72ZBTVBBT9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name;
  function add_room(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="guitter_page.html"
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='RedirectToRoom(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function RedirectToRoom(name){
localStorage.setItem("room_name",name);
window.location="guitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

  