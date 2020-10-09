firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.replace('main.html');
    } else {
      // No user is signed in.
    }
  });

  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function forgot_password(){
  
    var auth = firebase.auth();
    var userEmail = document.getElementById("email_field").value;
    
    auth.sendPasswordResetEmail(userEmail).then(function() {
      // Email sent.
      window.alert("To reset password please check your email");
    }).catch(function(error) {
      // An error happened.
      window.alert("Please enter correct Email Id");
    });
    
  }
  
  function logout(){
    firebase.auth().signOut();
  }