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

firebase.database().ref().child('users').on('child_added',function(donor_snapshot){
    var usersKey = donor_snapshot.key;
    // alert(usersKey);
    firebase.database().ref().child('users').child(usersKey).child('user_details').on('value',function(donor_deep_snapshot){
        
        var name_fetch = donor_deep_snapshot.child('name').val(); 
        var email_fetch = donor_deep_snapshot.child('email').val(); 
        var phone_no_fetch = donor_deep_snapshot.child('phone_no').val();
        
        var tableRef = document.getElementById('donortable').getElementsByTagName('tbody')[0];
        
        // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        
        // Insert a cell in the row at index 0
        var name_cell = newRow.insertCell(0);
        var email_cell = newRow.insertCell(1);
        var phone_cell = newRow.insertCell(2);
        var more_detail_cell = newRow.insertCell(3);
        var id_cell = newRow.insertCell(4).hidden;
        
        // Append a text node to the cell
        var name_value_cell = document.createTextNode(name_fetch);
        var email_value_cell = document.createTextNode(email_fetch);
        var phone_value_cell = document.createTextNode(phone_no_fetch);
        var more_detail_value_cell = document.createTextNode(usersKey);
        
        var alink_donor_details = document.createElement("a");
        var alink_donor_details_text = document.createTextNode('More Detail');
        alink_donor_details.appendChild(alink_donor_details_text);
        alink_donor_details.setAttribute('class',"btn btn-danger mr-2");
        
        alink_donor_details.href = "more-detail-user.html?id="+usersKey;
        
        name_cell.appendChild(name_value_cell);
        email_cell.appendChild(email_value_cell);
        phone_cell.appendChild(phone_value_cell);
        
        more_detail_cell.appendChild(alink_donor_details);
        //remove_cell.appendChild(alink_remove);
        id_cell = appendChild(more_detail_value_cell);
    });
});