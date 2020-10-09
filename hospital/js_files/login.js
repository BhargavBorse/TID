firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.replace('main.html');
  } else {
    // No user is signed in.
  }
});

function login(){
  firebase.database().ref().child('hospital').on('child_added',function(login_snapshot){
    var login_det = login_snapshot.child('password').val();
    var decrypted = CryptoJS.AES.decrypt(login_det, "Secret Passphrase");
    
    var email_det = login_snapshot.child('email').val();
    
    var email_field = document.getElementById('email_field').value;
    var pass_field = document.getElementById('password_field').value;
    
    
    if(pass_field === decrypted.toString(CryptoJS.enc.Utf8) && email_field === email_det)
    {
      window.location.replace('main.html');
    }
    else{
      alert("OOPS! Wrong Credentials. Please try again.");
    }
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