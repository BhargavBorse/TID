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



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var url_string = window.location.href;
        var url = new URL(url_string);
        
        var id = url.searchParams.get("id");
        // alert(id);
        var userid = url.searchParams.get("userid");
        var database = firebase.database().ref('users');
        
        // alert('1');
        
        firebase.database().ref('users').child(user.uid).child('requests').on('child_added',function(request_details_snapshot){
            var request_details = request_details_snapshot.val();
            var status = request_details_snapshot.child('status').val();
            
            if(status === "Accepted")
            {
                document.getElementById('inputName').value = request_details.name;
                document.getElementById('inputEmail').value = request_details.email;
                document.getElementById('inputPhNumber').value = request_details.phone_no;
                document.getElementById('inputAddress').value = request_details.address;
                document.getElementById('inputZip').value = request_details.zip;
                document.getElementById('inputBloodGroup').value = request_details.blood_group;
                document.getElementById('inputGender').value = request_details.gender;
                document.getElementById('inputConditions').value = request_details.condition;
                document.getElementById('inputConditionsDate').value = request_details.conditions_date;
                document.getElementById('inputDiseases').value = request_details.disease;
                document.getElementById('inputDiseasesDate').value = request_details.disease_date;
            }
            else{
                alert('You cannot see contact information until donor accepts your request');
                // window.location.replace('main.html');
            }
        });
        document.getElementById('delBtn').onclick = function(){
            // alert(userid + id);
            // firebase.database().ref('users').child(userid).child('requests').child(id).remove(function(){
                                
            // });
            firebase.database().ref('users').child(user.uid).child('requests').child(id).remove(function(){
            //    alert(id);
            });
            window.location.replace('main.html');
        }
    }
});

document.getElementById('homeBtn').onclick = function(){
    window.location.replace('main.html');
}