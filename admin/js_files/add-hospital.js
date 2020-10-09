firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var user = firebase.auth().currentUser;
        if(user !=null)
        {
            var email_id = user.email;
            document.getElementById('user_div').innerHTML = "Logged in as: " + email_id;
        }
    } else {
        // No user is signed in.
        alert("Please sign in and try again.");
        window.location.replace("index.html");
    }
});
// const auth = firebase.auth();

function signUpHos(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dbRef = firebase.database().ref();

    var encrypted = CryptoJS.AES.encrypt(password, "Secret Passphrase");
    console.log(encrypted.toString());
    
    var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), "Secret Passphrase");
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    
    dbRef.child('hospital').push({
        password : encrypted.toString(),
        email : email
    });
    alert('done');
    // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    // promise.catch(e => alert(e.message));
    
    // alert("Added Hospital");
}