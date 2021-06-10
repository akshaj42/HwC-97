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

user_name=localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!";

function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update(
          {purpose:"addingroom"}
    );
    localStorage.setItem("room_name",room_name);
    window.location="Kwitter_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
   //Start code
   console.log("room_name"+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

