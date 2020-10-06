var uid;
var database = firebase.database().ref('users');
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('major').hidden = false;
        document.getElementById('thenav').hidden = false;
        document.getElementById('loader').hidden = true;
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        var providerData = user.providerData;
        if(displayName!=null)
        {
            document.getElementById('userName').innerText=displayName;
        }
        pullDets();
        // ...
    } else {
        // User is signed out.
        // ...
        window.location.replace('index.html');
    }
});

var database = firebase.database().ref();
var eventRef = firebase.database().ref('users');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        
        // var date = document.getElementById("date").value = d + "/" + m + "/" + y;
        
        var time = new Date();
        
        var current_time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        
        //  alert(current_time);
        
        document.getElementById('subBtn').onclick = function(){
            
            // var x = document.forms["myForm"]["message"].value;
            // if (x == "") {
            //     alert("Please enter message");
            //     return false;
            // }
            
            // alert(time);
            var name = document.getElementById('inputName').value;
            var email = document.getElementById('inputEmail').value;
            var phone_no = document.getElementById('inputPhNumber').value;
            var subject = document.getElementById('inputSubject').value;
            var message = document.getElementById('message').value;
            // alert(message_for);
            database.child('Feedback').push({
                id: user.uid,
                name: name, 
                email: email,
                phone_no: phone_no,
                subject : subject,
                message: message,
                feed_date: d + "/" + m + "/" + y,
                feed_time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            });
            alert('Feedback Submitted');
            location.reload();
            // end of storing data
        };
    }
});