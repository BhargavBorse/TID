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
            
            var donation_btn = document.getElementById('donationBtn');
            donation_btn.style.visibility = 'visible';
            
            // var alink_donate_details = document.createElement("a");
            // var alink_donate_details_text = document.createTextNode('Donation History');
            // alink_donate_details.appendChild(alink_donate_details_text);
            // alink_donate_details.setAttribute('class',"btn btn-danger mr-2");
            // // alink_delete_details.setAttribute('class',"fa fa-info")
            
            // alink_donate_details.href = "donation-history.html?id="+id+"&type=donation";
            
            // donation_btn.appendChild(alink_donate_details);   
            
        });
    }
});




function donationHistory(){
    
    var url_string = window.location.href;
    var url = new URL(url_string);

    var id = url.searchParams.get("id");

    window.location.replace('donation-history.html?id='+id);
}

document.getElementById('homeBtn').onclick = function(){
    window.location.replace('main.html');
}
document.getElementById('backBtn').onclick = function(){
    window.location.replace('donor-list.html');
}