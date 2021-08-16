
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB23XofuEnP9Xb79tcv8BZHmWeWGGlXlM8",
    authDomain: "kwitter-97055.firebaseapp.com",
    databaseURL: "https://kwitter-97055-default-rtdb.firebaseio.com",
    projectId: "kwitter-97055",
    storageBucket: "kwitter-97055.appspot.com",
    messagingSenderId: "465177755430",
    appId: "1:465177755430:web:30f6ef1fdce75e825ecbe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"Adding User"})
  }
