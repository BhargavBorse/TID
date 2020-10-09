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
var database = firebase.database().ref();
document.getElementById('subBtn').onclick = function(){
    
    var name = document.getElementById('inputName').value;
    var phone_no = document.getElementById('inputPhNumber').value;
    var address = document.getElementById('inputAddress').value;
    var zip = document.getElementById('inputZip').value;
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var dbRef = firebase.database().ref();

    var encrypted = CryptoJS.AES.encrypt(password, "Secret Passphrase");
    console.log(encrypted.toString());
    
    // var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), "Secret Passphrase");
    // console.log(decrypted.toString(CryptoJS.enc.Utf8));

    database.child('hospital').push({
        hospital_name : name,
        phone_no : phone_no,
        address : address,
        zip : zip,
        email : email,
        password : encrypted.toString()
    });
    alert("Hospital added");
    window.location.replace("main.html");
}