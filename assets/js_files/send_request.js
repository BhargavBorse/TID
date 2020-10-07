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
        var userid = url.searchParams.get("userid");
        var database = firebase.database().ref('users');
        firebase.database().ref().child('donation').on('child_added',function(donation_snapshot){

            database.child(id).child('user_details').on('value',function(user_details_snapshot){
                var user_details = user_details_snapshot.val();
                
                document.getElementById('inputName').value = user_details.name;
                // document.getElementById('inputEmail').value = user_details.email;
                // document.getElementById('inputPhNumber').value = user_details.phone_no;
                // document.getElementById('inputAddress').value = user_details.address;
                // document.getElementById('inputZip').value = user_details.zip;
                document.getElementById('inputBloodGroup').value = user_details.blood_group;
                document.getElementById('inputGender').value = user_details.gender;
                document.getElementById('inputConditions').value = user_details.condition;
                document.getElementById('inputConditionsDate').value = user_details.conditions_date;
                document.getElementById('inputDiseases').value = user_details.disease;
                document.getElementById('inputDiseasesDate').value = user_details.disease_date;
    

                // var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');
                
                // var playersRef = firebase.database().ref('users');
                
                // var playersKey = playersRef.getKey();
                // console.log(playersKey);

                
                document.getElementById('reqBtn').onclick = function(){
                    if (document.getElementById('detsForm')!=null)
                    {
                        firebase.database().ref('users').child(id).child('requests').push({
                            name: user_details.name,
                            email: user_details.email,
                            phone_no: user_details.phone_no,
                            address: user_details.address,
                            zip: user_details.zip,
                            blood_group: user_details.blood_group,
                            gender: user_details.gender,
                            condition: user_details.condition,
                            conditions_date: user_details.conditions_date,
                            disease: user_details.disease,
                            disease_date: user_details.disease_date,
                            request_from: userid,
                            request_type: "received",
                            status: "Requested"
                        });
                        firebase.database().ref('users').child(userid).child('requests').push({
                            name: user_details.name,
                            email: user_details.email,
                            phone_no: user_details.phone_no,
                            address: user_details.address,
                            zip: user_details.zip,
                            blood_group: user_details.blood_group,
                            gender: user_details.gender,
                            condition: user_details.condition,
                            conditions_date: user_details.conditions_date,
                            disease: user_details.disease,
                            disease_date: user_details.disease_date,
                            request_to: id,
                            request_from: userid,
                            request_type: "sent",
                            status: "Requested"
                        });
                        alert("Your request is sent successfully.");
                        window.location.replace('main.html');
                    }
                }
            });

            // if(id === donation_snapshot.key)
            // {
            //     document.getElementById('subBtn').onclick = function(){
            //         if (document.getElementById('detsForm')!=null)
            //         {
            //             var appointment_date = document.getElementById('inputApptDate').value;
            //             var appointment_time = document.getElementById('inputApptTime').value;
            //             var hospital = document.getElementById('inputHospital').value;
        
            //             firebase.database().ref().child('donation').update({
            //                 appointment_date: appointment_date,
            //                 appointment_time: appointment_time,
            //                 hospital: hospital
            //             });
            //         }
            //     }
            // }
        });





        
    }
});