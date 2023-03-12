 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCKocP2YptRc9QZXafhaoynGAaCEJ3sjOw",
    authDomain: "ally-84645.firebaseapp.com",
    databaseURL: "https://ally-84645-default-rtdb.firebaseio.com",
    projectId: "ally-84645",
    storageBucket: "ally-84645.appspot.com",
    messagingSenderId: "575464278309",
    appId: "1:575464278309:web:f119351bf71bffb02f72cc",
    measurementId: "G-1W4E10NTV8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "ally_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "ally_room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
