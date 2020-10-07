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




firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // var select = document.createElement('select');
        // document.getElementById('blood_drp').appendChild(select);
        // select.setAttribute('class', 'form-control');
        
        
        
        
        
        
        
        
        // firebase.database().ref().child('users').on('child_added',function(donation_snapshot){
        //     var blood_key = donation_snapshot.key;
        //     firebase.database().ref().child('users').child(blood_key).child('user_details').on('value',function(donation_deep_snapshot){
        //         var bloodGrp = donation_deep_snapshot.child('blood_group').val();
        
        
        //         document.getElementById('searchBtn').onclick = function(){
        //             var blood_group_type = document.getElementById("inputBloodType").value;
        //             if(blood_group_type === bloodGrp)
        //             {
        //                 var name_fetch = donation_deep_snapshot.child('name').val();
        //                 var condition_fetch = donation_deep_snapshot.child('condition').val(); 
        //                 var condition_date_fetch = donation_deep_snapshot.child('conditions_date').val(); 
        //                 var disease_fetch = donation_deep_snapshot.child('disease').val(); 
        //                 var disease_date_fetch = donation_deep_snapshot.child('disease_date').val(); 
        //                 var id = donation_snapshot.key;
        
        //                 var tableRef = document.getElementById('fetch_blood').getElementsByTagName('tbody')[0];
        
        //                 // Insert a row in the table at the last row
        //                 var newRow   = tableRef.insertRow(tableRef.rows.length);
        
        //                 // Insert a cell in the row at index 0
        //                 var name_cell = newRow.insertCell(0);
        //                 var blood_group_cell = newRow.insertCell(1);
        //                 var condition_cell = newRow.insertCell(2);
        //                 var condition_date_cell = newRow.insertCell(3);
        //                 var disease_cell = newRow.insertCell(4);
        //                 var disease_date_cell = newRow.insertCell(5);
        //                 var request_cell = newRow.insertCell(6);
        //                 var id_cell = newRow.insertCell(7).hidden;
        
        //                 // Append a text node to the cell
        //                 var name_value_cell = document.createTextNode(name_fetch);
        //                 var blood_group_value_cell = document.createTextNode(bloodGrp);
        //                 var condition_value_cell = document.createTextNode(condition_fetch);
        //                 var condition_date_value_cell = document.createTextNode(condition_date_fetch);
        //                 var disease_value_cell = document.createTextNode(disease_fetch);
        //                 var disease_date_value_cell = document.createTextNode(disease_date_fetch);
        //                 var id_value_cell = document.createTextNode(id);
        
        //                 var alink_delete_details = document.createElement("a");
        //                 var alink_delete_details_text = document.createTextNode('Send Request');
        //                 alink_delete_details.appendChild(alink_delete_details_text);
        //                 alink_delete_details.setAttribute('class',"btn btn-danger mr-2")
        
        //                 alink_delete_details.href = "send_request.js?id="+id+"&type=findBlood";
        
        //                 name_cell.appendChild(name_value_cell);
        //                 blood_group_cell.appendChild(blood_group_value_cell);
        //                 condition_cell.appendChild(condition_value_cell);
        //                 condition_date_cell.appendChild(condition_date_value_cell);
        //                 disease_cell.appendChild(disease_value_cell);
        //                 disease_date_cell.appendChild(disease_date_value_cell);
        
        //                 request_cell.appendChild(alink_delete_details);
        //                 id_cell = appendChild(id_value_cell);
        //             }
        //             else{
        //                 alert("SORRY. No such blood type is available!");
        //             }
        //         }
        //     });
        // });
        
        
        
        var flag = 0;
        document.getElementById('searchBtn').onclick = function(){
            firebase.database().ref().child('users').on('child_added',function(donation_snapshot){
                var blood_key = donation_snapshot.key;
                 firebase.database().ref().child('users').child(blood_key).child('user_details').on('value', function(donation_deep_snapshot){
                    var bloodGrp = donation_deep_snapshot.child('blood_group').val();
                    
                    var blood_group_type = document.getElementById("inputBloodType").value;
                    if(blood_group_type === bloodGrp || user.uid != user.uid)
                    {
                        flag = 1;
                        var name_fetch = donation_deep_snapshot.child('name').val();
                        var condition_fetch = donation_deep_snapshot.child('condition').val(); 
                        var condition_date_fetch = donation_deep_snapshot.child('conditions_date').val(); 
                        var disease_fetch = donation_deep_snapshot.child('disease').val(); 
                        var disease_date_fetch = donation_deep_snapshot.child('disease_date').val(); 
                        var id = donation_snapshot.key;
                        
                        var tableRef = document.getElementById('fetch_blood').getElementsByTagName('tbody')[0];
                        
                        // Insert a row in the table at the last row
                        var newRow   = tableRef.insertRow(tableRef.rows.length);
                        
                        // Insert a cell in the row at index 0
                        var name_cell = newRow.insertCell(0);
                        var blood_group_cell = newRow.insertCell(1);
                        var condition_cell = newRow.insertCell(2);
                        var condition_date_cell = newRow.insertCell(3);
                        var disease_cell = newRow.insertCell(4);
                        var disease_date_cell = newRow.insertCell(5);
                        var request_cell = newRow.insertCell(6);
                        var id_cell = newRow.insertCell(7).hidden;
                        
                        // Append a text node to the cell
                        var name_value_cell = document.createTextNode(name_fetch);
                        var blood_group_value_cell = document.createTextNode(bloodGrp);
                        var condition_value_cell = document.createTextNode(condition_fetch);
                        var condition_date_value_cell = document.createTextNode(condition_date_fetch);
                        var disease_value_cell = document.createTextNode(disease_fetch);
                        var disease_date_value_cell = document.createTextNode(disease_date_fetch);
                        var id_value_cell = document.createTextNode(id);
                        
                        var alink_delete_details = document.createElement("a");
                        var alink_delete_details_text = document.createTextNode('Send Request');
                        alink_delete_details.appendChild(alink_delete_details_text);
                        alink_delete_details.setAttribute('class',"btn btn-danger mr-2")
                        
                        alink_delete_details.href = "request_send.html?id="+id+"&userid="+user.uid;
                        
                        name_cell.appendChild(name_value_cell);
                        blood_group_cell.appendChild(blood_group_value_cell);
                        condition_cell.appendChild(condition_value_cell);
                        condition_date_cell.appendChild(condition_date_value_cell);
                        disease_cell.appendChild(disease_value_cell);
                        disease_date_cell.appendChild(disease_date_value_cell);
                        
                        request_cell.appendChild(alink_delete_details);
                        id_cell = appendChild(id_value_cell);
                    
                    }
                    // else{
                    //     alert(bloodGrp);
                    // }
                });
            });
            if(flag == 0)
            {
                alert("Sorry! No such Blood type is available.");
            }
        }
       
    }
});