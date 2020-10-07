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
        
        database.child(user.uid).child('user_details').on('value',function(user_details_snapshot){
            var user_details = user_details_snapshot.val();
            
            document.getElementById('inputName').value = user_details.name;
            document.getElementById('inputEmail').value = user_details.email;
            document.getElementById('inputPhNumber').value = user_details.phone_no;
            document.getElementById('inputAddress').value = user_details.address;
            document.getElementById('inputZip').value = user_details.zip;
            document.getElementById('inputBloodGroup').value = user_details.blood_group;
            document.getElementById('inputGender').value = user_details.gender;
            document.getElementById('inputConditions').value = user_details.condition;
            document.getElementById('inputConditionsDate').value = user_details.conditions_date;
            document.getElementById('inputDiseases').value = user_details.disease;
            document.getElementById('inputDiseasesDate').value = user_details.disease_date;
            
            
        });
        document.getElementById('subBtn').onclick = function(){
            if (document.getElementById('detsForm')!=null)
            {
                var name = document.getElementById('inputName').value;
                var email = document.getElementById('inputEmail').value;
                var phone_no = document.getElementById('inputPhNumber').value;
                var address = document.getElementById('inputAddress').value;
                var zip = document.getElementById('inputZip').value;
                var blood_group = document.getElementById('inputBloodGroup').value;
                var gender = document.getElementById('inputGender').value;
                var condition = document.getElementById('inputConditions').value;
                var conditions_date = document.getElementById('inputConditionsDate').value;
                var disease = document.getElementById('inputDiseases').value;
                var disease_date = document.getElementById('inputDiseasesDate').value;
                
                database.child(user.uid).child('user_details').update({
                    name: name,
                    email: email,
                    phone_no: phone_no,
                    address: address,
                    zip: zip,
                    blood_group: blood_group,
                    gender: gender,
                    condition: condition,
                    conditions_date: conditions_date,
                    disease: disease,
                    disease_date: disease_date
                });
                // alert('Details Successfully Updated');
                window.location.replace('appointment.html');
                // var docRef = db.collection("pdets").doc(uid);
                // docRef.get().then(function (doc) {
                //     if (doc.exists) {
                //         var pdets = doc.data();
                //         document.getElementById('inputEmail').value = pdets.u_email;
                //         document.getElementById('inputPhNumber').value = pdets.u_phnum;
                //         document.getElementById('inputAddress').value = pdets.u_addr;
                //         document.getElementById('inputAddress2').value = pdets.u_addr2;
                //         document.getElementById('inputCity').value = pdets.u_city;
                //         document.getElementById('inputState').selectedIndex = pdets.u_stateIndex;
                //         document.getElementById('inputZip').value = pdets.u_zip;
                //         document.getElementById('inputBloodGroup').value = pdets.u_bgroup;
                //         document.getElementById('inputConditions').selectedIndex = pdets.u_selCondition;
                //         if (pdets.u_selCondition!=0){
                //             document.getElementById('conditionsDate').hidden = false;
                //             var hasCon = document.getElementById('inputConditions');
                //             var conDate = new Date(pdets.u_conditionEnd - hasCon.options[hasCon.selectedIndex].value);
                //             document.getElementById('inputConditionsDate').valueAsDate = conDate;
                //         }
                //         document.getElementById('inputDiseases').selectedIndex = pdets.u_selDisease;
                //         if(pdets.u_selDisease!=0){
                //             document.getElementById('diseaseDate').hidden = false;
                //             var hasDis = document.getElementById('inputDiseases');
                //             var disDate = new Date(pdets.u_diseaseEnd - hasDis.options[hasDis.selectedIndex].value);
                //             document.getElementById('inputDiseasesDate').valueAsDate = disDate;
                //         }
                //         document.getElementById('subBtn').innerText="Update";
                //     } else {
                //         // doc.data() will be undefined in this case
                //         console.log("No such document!");
                //     }
                // }).catch(function (error) {
                //     console.log("Error getting document:", error);
                // });
            }
        }
    }
    
    else {
        // User is signed out.
        // ...
        window.location.replace('index.html');
    }
});

document.getElementById('back-main').onclick = function(){
    window.location.replace('main.html');
};