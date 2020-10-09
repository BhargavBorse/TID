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
var url_string = window.location.href;
var url = new URL(url_string);

var id = url.searchParams.get("id");
alert(id);
firebase.database().ref().child('donation').on('child_added',function(donation_snapshot){
    var donationId = donation_snapshot.child('userId').val();
    if(donationId === id)
    {
        var user_id = donation_snapshot.child('userId').val();
        
        var appointment_date_fetch = donation_snapshot.child('appointment_date').val();
        
        var appointment_time_fetch = donation_snapshot.child('appointment_time').val(); 
        var hospital_fetch = donation_snapshot.child('hospital').val(); 
        var remark_fetch = donation_snapshot.child('remark').val(); 
        var status_fetch = donation_snapshot.child('status').val(); 
        var user_id = donation_snapshot.child('userId').val();
        
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
        
        // var print_btn = document.getElementById('printBtn');
        // print_btn.style.visibility = 'visible';
    }
    
    
    
});