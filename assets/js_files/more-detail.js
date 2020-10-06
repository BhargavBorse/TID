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


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var url_string = window.location.href;
        var url = new URL(url_string);
        
        var id = url.searchParams.get("id");
        var type = url.searchParams.get("type");
        
        // firebase.database().ref().child('donation').on('child_added',function(donation_snapshot){
        //     if(id === donation_snapshot.key)
        //     {
        //         document.getElementById('subBtn').onclick = function(){
        //             if (document.getElementById('detsForm')!=null)
        //             {
        //                 var appointment_date = document.getElementById('inputApptDate').value;
        //                 var appointment_time = document.getElementById('inputApptTime').value;
        //                 var hospital = document.getElementById('inputHospital').value;
        
        //                 firebase.database().ref().child('donation').update({
        //                     appointment_date: appointment_date,
        //                     appointment_time: appointment_time,
        //                     hospital: hospital
        //                 });
        //             }
        //         }
        //     }
        // });
        document.getElementById('subBtn').onclick = function(){
            if (document.getElementById('detsForm')!=null)
            {
                var appointment_date = document.getElementById('inputApptDate').value;
                var appointment_time = document.getElementById('inputApptTime').value;
                var hospital = document.getElementById('inputHospital').value;
                
                firebase.database().ref().child('donation').child(id).update({
                    appointment_date: appointment_date,
                    appointment_time: appointment_time,
                    hospital: hospital
                });
                alert("Your appointment is successfully updated");
                window.location.replace('manage-appt.html');
            }
        }
    }
});



