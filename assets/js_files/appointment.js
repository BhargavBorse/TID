var uid;
var database = firebase.database().ref();
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
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('subBtn').onclick = function(){
            if (document.getElementById('detsForm')!=null)
            {
                var appointment_date = document.getElementById('inputApptDate').value;
                var appointment_time = document.getElementById('inputApptTime').value;
                var hospital = document.getElementById('inputHospital').value;
                var status = document.getElementById('status').value;
                var remark = document.getElementById('remark').value;
                database.child('donation').push({
                    appointment_date: appointment_date,
                    appointment_time: appointment_time,
                    hospital: hospital,
                    userId: user.uid,
                    status: status,
                    remark: remark
                });
                alert('Your appointment is sent to the hospital. You can check your appointment status in manage appointment.')
                window.location.replace('main.html');
            }
        }
    }
});
document.getElementById('back').onclick = function(){
    window.location.replace('pinfo.html');
};