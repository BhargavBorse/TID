var uid;
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
        window.location.replace('login.html');
    }
});

function pullDets(){
    if (document.getElementById('detsForm')!=null)
    {
        var docRef = db.collection("pdets").doc(uid);
        docRef.get().then(function (doc) {
            if (doc.exists) {
                var pdets = doc.data();
                document.getElementById('inputEmail').value = pdets.u_email;
                document.getElementById('inputPhNumber').value = pdets.u_phnum;
                document.getElementById('inputAddress').value = pdets.u_addr;
                document.getElementById('inputAddress2').value = pdets.u_addr2;
                document.getElementById('inputCity').value = pdets.u_city;
                document.getElementById('inputState').selectedIndex = pdets.u_stateIndex;
                document.getElementById('inputZip').value = pdets.u_zip;
                document.getElementById('inputBloodGroup').value = pdets.u_bgroup;
                document.getElementById('inputConditions').selectedIndex = pdets.u_selCondition;
                if (pdets.u_selCondition!=0){
                    document.getElementById('conditionsDate').hidden = false;
                    var hasCon = document.getElementById('inputConditions');
                    var conDate = new Date(pdets.u_conditionEnd - hasCon.options[hasCon.selectedIndex].value);
                    document.getElementById('inputConditionsDate').valueAsDate = conDate;
                }
                document.getElementById('inputDiseases').selectedIndex = pdets.u_selDisease;
                if(pdets.u_selDisease!=0){
                    document.getElementById('diseaseDate').hidden = false;
                    var hasDis = document.getElementById('inputDiseases');
                    var disDate = new Date(pdets.u_diseaseEnd - hasDis.options[hasDis.selectedIndex].value);
                    document.getElementById('inputDiseasesDate').valueAsDate = disDate;
                }
                document.getElementById('subBtn').innerText="Update";
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
}