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

firebase.database().ref().child('donation').on('child_added',function(appointment_snapshot){
    
    var appointment_date_fetch = appointment_snapshot.child('appointment_date').val(); 
    var appointment_time_fetch = appointment_snapshot.child('appointment_time').val(); 
    var hospital_fetch = appointment_snapshot.child('hospital').val(); 
    var remark_fetch = appointment_snapshot.child('remark').val(); 
    var status_fetch = appointment_snapshot.child('status').val(); 
    var id_fetch = appointment_snapshot.child('userId').val();
    var id = appointment_snapshot.child('userId').val();
    var apptkey = appointment_snapshot.key;
    
    if(status_fetch === "Sent to Hospital")
    {
        // alert(apptkey);
        var tableRef = document.getElementById('appointmenttable').getElementsByTagName('tbody')[0];
        
        // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        
        // Insert a cell in the row at index 0
        // var userid_cell = newRow.insertCell(0);
        var appointment_date_cell = newRow.insertCell(0);
        var appointment_time_cell = newRow.insertCell(1);
        var hospital_cell = newRow.insertCell(2);
        var status_cell = newRow.insertCell(3);
        var remark_cell = newRow.insertCell(4);
        var user_detail_cell = newRow.insertCell(5);
        var id_cell = newRow.insertCell(6).hidden;
        
        // Append a text node to the cell
        // var userid_value_cell = document.createTextNode(id);
        var appointment_date_value_cell = document.createTextNode(appointment_date_fetch);
        var appointment_time_value_cell = document.createTextNode(appointment_time_fetch);
        var hospital_value_cell = document.createTextNode(hospital_fetch);
        var status_value_cell = document.createTextNode(status_fetch);
        var remark_value_cell = document.createTextNode(remark_fetch);
        var id_value_cell = document.createTextNode(id);

        var alink_delete_details = document.createElement("a");
        var alink_delete_details_text = document.createTextNode('User Detail');
        alink_delete_details.appendChild(alink_delete_details_text);
        alink_delete_details.setAttribute('class',"btn btn-danger mr-2")
        // alink_delete_details.setAttribute('class',"fa fa-info")
        
        alink_delete_details.href = "appt-more.html?id="+id+"&apptid=" + apptkey;
        
        // userid_cell.appendChild(userid_value_cell);
        appointment_date_cell.appendChild(appointment_date_value_cell);
        appointment_time_cell.appendChild(appointment_time_value_cell);
        hospital_cell.appendChild(hospital_value_cell);
        status_cell.appendChild(status_value_cell);
        remark_cell.appendChild(remark_value_cell);    
        user_detail_cell.appendChild(alink_delete_details);
        id_cell.appendChild(id_value_cell);
    }
});