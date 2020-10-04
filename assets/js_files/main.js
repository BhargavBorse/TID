var eventRef = firebase.database().ref('users');

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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // console.log(user.uid);
        // console.log(user.email);
        eventRef.child(user.uid).child('user_details').on('value',function(return_value){
            return_value_value = return_value.val();
            // console.log(return_value_value);
            if(return_value_value === null){
                window.location = 'firstLogin.html';
            }
            else
            {
                // eventRef.child(user.uid).child('details').update({
                //     email : user.email
                // });
            }
        });
    }
});