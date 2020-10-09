firebase.database().ref().child('donation').on('child_added',function(appointment_snapshot){
    
    var appointment_date_fetch = appointment_snapshot.child('appointment_date').val(); 
    var appointment_time_fetch = appointment_snapshot.child('appointment_time').val(); 
    var hospital_fetch = appointment_snapshot.child('hospital').val(); 
    var remark_fetch = appointment_snapshot.child('remark').val(); 
    var status_fetch = appointment_snapshot.child('status').val(); 
    
    if(hospital_fetch === "Indian Blood Service - Manjalpur")
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
        
        // Append a text node to the cell
        // var userid_value_cell = document.createTextNode(id);
        var appointment_date_value_cell = document.createTextNode(appointment_date_fetch);
        var appointment_time_value_cell = document.createTextNode(appointment_time_fetch);
        var hospital_value_cell = document.createTextNode(hospital_fetch);
        var status_value_cell = document.createTextNode(status_fetch);
        var remark_value_cell = document.createTextNode(remark_fetch);
        
        // userid_cell.appendChild(userid_value_cell);
        appointment_date_cell.appendChild(appointment_date_value_cell);
        appointment_time_cell.appendChild(appointment_time_value_cell);
        hospital_cell.appendChild(hospital_value_cell);
        status_cell.appendChild(status_value_cell);
        remark_cell.appendChild(remark_value_cell);
    }
});

function backpg(){
    window.location.replace('main.html');
}