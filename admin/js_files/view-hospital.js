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

firebase.database().ref().child('hospital').on('child_added',function(appointment_snapshot){
    
    var hospital_fetch = appointment_snapshot.child('hospital_name').val(); 
    var email_fetch = appointment_snapshot.child('email').val(); 
    var address_fetch = appointment_snapshot.child('address').val(); 
    var zip_fetch = appointment_snapshot.child('zip').val(); 
    var phone_no_fetch = appointment_snapshot.child('phone_no').val();
    
    // alert(apptkey);
    var tableRef = document.getElementById('hospitaltable').getElementsByTagName('tbody')[0];
    
    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(tableRef.rows.length);
    
    // Insert a cell in the row at index 0
    // var userid_cell = newRow.insertCell(0);
    var name_cell = newRow.insertCell(0);
    var email_cell = newRow.insertCell(1);
    var address_cell = newRow.insertCell(2);
    var zip_cell = newRow.insertCell(3);
    var phone_no_cell = newRow.insertCell(4);
    
    // Append a text node to the cell
    var hospital_value_cell = document.createTextNode(hospital_fetch);
    var email_value_cell = document.createTextNode(email_fetch);
    var address_value_cell = document.createTextNode(address_fetch);
    var zip_value_cell = document.createTextNode(zip_fetch);
    var phone_no_value_cell = document.createTextNode(phone_no_fetch);
    
    // userid_cell.appendChild(userid_value_cell);
    name_cell.appendChild(hospital_value_cell);
    email_cell.appendChild(email_value_cell);
    address_cell.appendChild(address_value_cell);
    zip_cell.appendChild(zip_value_cell);
    phone_no_cell.appendChild(phone_no_value_cell);
    
});