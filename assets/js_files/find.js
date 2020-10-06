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

var databaseRef = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
    var div_1 = document.createElement('div');
    
    // var item_dropdown = document.createElement("select");
    document.getElementsByClassName('select-dropdown')[0].appendChild(div_1);
    var select = document.createElement('select');
    select.setAttribute('id','deliveryman');
    select.setAttribute('class','form-control');
    div_1.appendChild(select);
    
    var dbRef = firebase.database().ref();
    var orderRef = firebase.database().ref('users');
    dbRef.child('users').on('value',function(blood_details_snapshot){
        var blood_details = blood_details_snapshot.val();
        var blood_type_Details_keys = Object.keys(blood_details);
        
        for(var i=0;i<blood_type_Details_keys.length;i++)
        {
            orderRef.child(blood_type_Details_keys[i]).on('value',function(blood_deep_details_snapshot){
                var blood_deep_details = blood_deep_details_snapshot.val();
                var j = i+1;
                var k = document.createElement("option");
                k.className = 'form-control';
                k.setAttribute('value', blood_deep_details.name);
                select.appendChild(k);
                j = document.createTextNode(blood_deep_details.name);
                k.appendChild(j);
                
                k.setAttribute('style',"margin-bottom: 1% !important;");
                
                // var img = document.getElementById('loading_gif');
                // img.style.visibility = 'hidden';
            });
        }
        
    });
});