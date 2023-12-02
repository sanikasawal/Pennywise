import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
var firebaseConfig = {
    apiKey: "AIzaSyCkWsrvCGqVgZ89_BJOSN-2ad75TjqnJg4",
    authDomain: "pennywisefinal.firebaseapp.com",
    projectId: "pennywisefinal",
    databaseURL: "https:pennywisefinal.firebaseio.com",
    storageBucket: "pennywisefinal.appspot.com",
    messagingSenderId: "435170443169",
    appId: "1:435170443169:web:42d83c4f664cce6d1b55e0",
    measurementId: "G-EG53PR8218"
  };
  //Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  // const auth = firebase.auth()
  const auth = getAuth(app);


  //Signup Function
  let signUpButton = document.getElementById('signup')
  signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
  })








  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    signInWithEmailAndPassword(auth, email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "dash.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    //is signed in
  } 
  else {
    //no user signed in
  }
})