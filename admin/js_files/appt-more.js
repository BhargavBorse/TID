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


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var url_string = window.location.href;
        var url = new URL(url_string);
        
        var id = url.searchParams.get("id");
        // alert(id);
        var userid = url.searchParams.get("userid");
        var database = firebase.database().ref('users');
        var apptid= firebase.database().ref('apptid');
        // alert('1');
        
        firebase.database().ref('users').child(id).on('child_added',function(request_details_snapshot){
            var request_details = request_details_snapshot.val();
            var status = request_details_snapshot.child('status').val();
            
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
            
        });
        // document.getElementById('delBtn').onclick = function(){
        //     // alert(userid + id);
        //     // firebase.database().ref('users').child(userid).child('requests').child(id).remove(function(){
                                
        //     // });
        //     firebase.database().ref('donation').child(apptid).remove(function(){
        //     //    alert(id);
        //     });
        //     window.location.replace('main.html');
        // }
    }
});

document.getElementById('homeBtn').onclick = function(){
    window.location.replace('main.html');
}