
//ADD YOUR FIREBASE LINKS HERE

  const firebaseConfig = {
    apiKey: "AIzaSyA-LW0hoP4sTps0qpjWsMxie4D5O2sbxUw",
    authDomain: "homework-178f2.firebaseapp.com",
    databaseURL: "https://homework-178f2-default-rtdb.firebaseio.com",
    projectId: "homework-178f2",
    storageBucket: "homework-178f2.appspot.com",
    messagingSenderId: "97136729002",
    appId: "1:97136729002:web:dbae41483b28c3b72269d3",
    measurementId: "G-81PNVMB0V5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectTOroomname(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById ("output").innerHTML+=row;

      //End code
      });});}
getData();


function addroom()
  {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"Adding Room Name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
          
  }


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html")
}