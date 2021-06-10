// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJ5LnH4QqXgWJg-1Gxor2nneEfmNbxQBc",
    authDomain: "kwitterhomework-11e50.firebaseapp.com",
    databaseURL: "https://kwitterhomework-11e50-default-rtdb.firebaseio.com",
    projectId: "kwitterhomework-11e50",
    storageBucket: "kwitterhomework-11e50.appspot.com",
    messagingSenderId: "784368383583",
    appId: "1:784368383583:web:9d3cbb8d67e76ce1378dea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//dont make any changes

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 name_tag="<h4>"+name+"<img class='user_tick' src='tink.png'></h4>";
 message_tag="<h4 class='message_h4'>"+message+"</h4>";
 like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>LIKE :"+like+"</span></button><hr>";
 row=name_tag+message_tag+like_button;
 document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function updateLike(message_id){
    console.log("clicked on like button-"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}

function log_out(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}