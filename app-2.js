// var firebaseConfig = {
//     apiKey: "AIzaSyCkWsrvCGqVgZ89_BJOSN-2ad75TjqnJg4",
//     authDomain: "pennywisefinal.firebaseapp.com",
//     projectId: "pennywisefinal",
//     databaseURL: "https:pennywisefinal.firebaseio.com",
//     storageBucket: "pennywisefinal.appspot.com",
//     messagingSenderId: "435170443169",
//     appId: "1:435170443169:web:42d83c4f664cce6d1b55e0",
//     measurementId: "G-EG53PR8218"
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
//   const auth = firebase.auth()
  
//    console.log(auth)
  
  
  
//   let signOutButton = document.getElementById("signout")
//   signOutButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
//     e.preventDefault()
//     console.log("clicked")
    
//     auth.signOut()
//     alert("Signed Out")
//     window.location = "index.html";
//   })