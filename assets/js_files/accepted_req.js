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
        firebase.database().ref('users').child(user.uid).child('requests').on('child_added',function(request_snapshot){
            
            var user_id = request_snapshot.child('request_from').val();
                var status = request_snapshot.child('status').val();
                var request_type = request_snapshot.child('request_type').val();
                // alert(request_type);
                if(status === "Accepted")
                {
                    var name_fetch = request_snapshot.child('name').val(); 
                    var blood_group_fetch = request_snapshot.child('blood_group').val();
                    var id = request_snapshot.key;
                    
                    var tableRef = document.getElementById('request_table').getElementsByTagName('tbody')[0];
                    
                    // Insert a row in the table at the last row
                    var newRow   = tableRef.insertRow(tableRef.rows.length);
                    
                    // Insert a cell in the row at index 0
                    var name_cell = newRow.insertCell(0);
                    var blood_group_cell = newRow.insertCell(1);
                    var status_cell = newRow.insertCell(2);
                    var moreinfo_cell = newRow.insertCell(3);
                    var id_cell = newRow.insertCell(4).hidden;
                    
                    // Append a text node to the cell
                    var name_value_cell = document.createTextNode(name_fetch);
                    var blood_group_value_cell = document.createTextNode(blood_group_fetch);
                    var status_value_cell = document.createTextNode(status);
                    var id_value_cell = document.createTextNode(id);
                    
                    
                    
                    var alink_more_details = document.createElement("a");
                    var alink_more_details_text = document.createTextNode('More Details');
                    alink_more_details.appendChild(alink_more_details_text);
                    alink_more_details.setAttribute('class',"btn btn-danger")
                    // alink_delete_details.setAttribute('class',"fa fa-info")
                    
                    alink_more_details.href = "contact_donor.html?id="+id+"&userid="+user_id;
                    
                    name_cell.appendChild(name_value_cell);
                    blood_group_cell.appendChild(blood_group_value_cell);
                    status_cell.appendChild(status_value_cell);
                    moreinfo_cell.appendChild(alink_more_details);
                    id_cell = appendChild(id_value_cell);
                }
            
        });
    }
});



// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         firebase.database().ref('users').child(user.uid).child('requests').on('child_added',function(request_snapshot){
            
//             var user_id = request_snapshot.child('request_to').val();
//             firebase.database().ref('users').child(user_id).child('requests').on('child_added',function(request_deep_snapshot){
//                 var status = request_deep_snapshot.child('status').val();
//                 if(status === "Requested")
//                 {
//                     var name_fetch = request_deep_snapshot.child('name').val(); 
//                     var blood_group_fetch = request_deep_snapshot.child('blood_group').val();
//                     var id = request_deep_snapshot.key;
                    
//                     var tableRef = document.getElementById('request_table').getElementsByTagName('tbody')[0];
                    
//                     // Insert a row in the table at the last row
//                     var newRow   = tableRef.insertRow(tableRef.rows.length);
                    
//                     // Insert a cell in the row at index 0
//                     var name_cell = newRow.insertCell(0);
//                     var blood_group_cell = newRow.insertCell(1);
//                     var status_cell = newRow.insertCell(2);
//                     var delete_cell = newRow.insertCell(3);
//                     var moreinfo_cell = newRow.insertCell(4);
//                     var id_cell = newRow.insertCell(5).hidden;
                    
//                     // Append a text node to the cell
//                     var name_value_cell = document.createTextNode(name_fetch);
//                     var blood_group_value_cell = document.createTextNode(blood_group_fetch);
//                     var status_value_cell = document.createTextNode(status);
//                     var id_value_cell = document.createTextNode(id);
                    
//                     var alink_delete_details = document.createElement("a");
//                     var alink_delete_details_text = document.createTextNode('Cancel Request');
//                     alink_delete_details.appendChild(alink_delete_details_text);
//                     alink_delete_details.setAttribute('class',"btn btn-danger")
//                     // alink_delete_details.setAttribute('class',"fa fa-info")
                    
//                     alink_delete_details.href = "req-sent.html?id="+id+"&userid="+user_id;
                    
//                     var alink_more_details = document.createElement("a");
//                     var alink_more_details_text = document.createTextNode('Contact Donor');
//                     alink_more_details.appendChild(alink_more_details_text);
//                     alink_more_details.setAttribute('class',"btn btn-danger")
//                     // alink_delete_details.setAttribute('class',"fa fa-info")
                    
//                     alink_more_details.href = "contact_donor.html?id="+id+"&userid="+user_id;
                    
//                     name_cell.appendChild(name_value_cell);
//                     blood_group_cell.appendChild(blood_group_value_cell);
//                     status_cell.appendChild(status_value_cell);
//                     delete_cell.appendChild(alink_delete_details);
//                     moreinfo_cell.appendChild(alink_more_details);
//                     id_cell = appendChild(id_value_cell);
//                 }
//             });
//         });
//     }
// });
