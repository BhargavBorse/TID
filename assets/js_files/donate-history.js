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




firebase.database().ref().child('donation').on('child_added',function(donation_snapshot){
    
    var user_id = donation_snapshot.child('userId').val();
    
    if(uid === user_id)
    {
        var appointment_date_fetch = donation_snapshot.child('appointment_date').val(); 
        var appointment_time_fetch = donation_snapshot.child('appointment_time').val(); 
        var hospital_fetch = donation_snapshot.child('hospital').val(); 
        var remark_fetch = donation_snapshot.child('remark').val(); 
        var status_fetch = donation_snapshot.child('status').val(); 
        var user_id = donation_snapshot.child('userId').val();
        
        if(status_fetch === "Completed" || status_fetch === "Failed")
        {
            var tableRef = document.getElementById('donationtable').getElementsByTagName('tbody')[0];
            
            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(tableRef.rows.length);
            
            // Insert a cell in the row at index 0
            var appointment_date_cell = newRow.insertCell(0);
            var appointment_time_cell = newRow.insertCell(1);
            var hospital_cell = newRow.insertCell(2);
            var status_cell = newRow.insertCell(3);
            var remark_cell = newRow.insertCell(4);
            
            // Append a text node to the cell
            var appointment_date_value_cell = document.createTextNode(appointment_date_fetch);
            var appointment_time_value_cell = document.createTextNode(appointment_time_fetch);
            var hospital_value_cell = document.createTextNode(hospital_fetch);
            var status_value_cell = document.createTextNode(status_fetch);
            var remark_value_cell = document.createTextNode(remark_fetch);
            
            
            appointment_date_cell.appendChild(appointment_date_value_cell);
            appointment_time_cell.appendChild(appointment_time_value_cell);
            hospital_cell.appendChild(hospital_value_cell);
            status_cell.appendChild(status_value_cell);
            remark_cell.appendChild(remark_value_cell);
            
            var print_btn = document.getElementById('printBtn');
            print_btn.style.visibility = 'visible';
        }        
    }
});

function printBtn() {
  print();
}









// var itemRef_donate = firebase.database().ref('donation');
// var dbRef_donate = firebase.database().ref();

// dbRef_donate.child('donation').on('value',function(donation_details_snapshot){
//     var donation_details = donation_details_snapshot.val();
//     var keys_donation = Object.keys(donation_details);


//     var donation_array = [];
//     for(var i=0;i<keys_donation.length;i++)
//     {
//         itemRef_donate.child(keys_donation[i]).on('value',function(user_donation_details_snapshot){
//             var donate_details = user_donation_details_snapshot.val();

//             if(donate_details.userid === true){
//                 //Div class=owl-item

//                 donation_array.push(keys_donation[i].toString());
//                 alert('DONE MY BOI');

//             }


//         });
//     }
// });






// var eventRef = firebase.database().ref('users');
// var groupRef = firebase.database().ref('groups');
// var fetchreminderRef = firebase.database().ref('users');
// var eventRef2 = firebase.database().ref('users');

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         alert('1');
//         //display reminders
//         fetchreminderRef = fetchreminderRef.child(user.uid).child('donation');
//         alert('2'); 
//         //retrievingreminders
//         fetchreminderRef.on('value', function(snap){
//             alert('3');
//             var title_reminder_fetch = snap.child('appointment_date').val();
//             alert(title_reminder_fetch);
//             var date_reminder_fetch =  snap.child('appointment_time').val();
//             var time_reminder_fetch = snap.child('hospital').val();
//             var id = snap.key;
//             // var id = snap.val();
//             // var id_id = Object.elements(id);

//             var tableRef = document.getElementById('remindertable').getElementsByTagName('tbody')[0];

//             // Insert a row in the table at the last row
//             var newRow   = tableRef.insertRow(tableRef.rows.length);

//             // Insert a cell in the row at index 0
//             var title_cell = newRow.insertCell(0);
//             var date_cell = newRow.insertCell(1);
//             var time_cell = newRow.insertCell(2);
//             var more_details_cell = newRow.insertCell(3);
//             //var remove_cell = newRow.insertCell(4);
//             var id_cell = newRow.insertCell(4).hidden;
//             // Append a text node to the cell
//             var title_value_cell = document.createTextNode(title_reminder_fetch);
//             var date_value_cell = document.createTextNode(date_reminder_fetch);
//             var time_value_cell = document.createTextNode(time_reminder_fetch);
//             var id_value_cell = document.createTextNode(id);


//             var alink_more_details = document.createElement("a");
//             var alink_more_details_text = document.createTextNode('');
//             alink_more_details.appendChild(alink_more_details_text);
//             // alink.setAttribute("href","http://index.html");
//             alink_more_details.setAttribute('class',"btn btn-primary")
//             alink_more_details.setAttribute('class',"fa fa-info")

//             //alink_more_details.href = "more-detail.html?id="+id;

//             alink_more_details.href = "more-detail.html?id="+id+"&type=reminders";

//             title_cell.appendChild(title_value_cell);
//             date_cell.appendChild(date_value_cell);
//             time_cell.appendChild(time_value_cell);
//             more_details_cell.appendChild(alink_more_details);
//             //remove_cell.appendChild(alink_remove);
//             id_cell = appendChild(id_value_cell);


//         },function(error){
//             alert('There was some error! Please Try Again');
//             document.location.reload(true);
//         });
//     } else {
//         // No user is signed in.
//         window.alert('Sorry! No user has been signed in. Please try logging in again');
//         window.location = 'login.html';
//     }
// });