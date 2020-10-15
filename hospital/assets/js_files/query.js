var database = firebase.database().ref();
var eventRef = firebase.database().ref('users');

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

// var date = document.getElementById("date").value = d + "/" + m + "/" + y;

var time = new Date();

var current_time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

//  alert(current_time);

document.getElementById('subBtn').onclick = function(){
    
    // var x = document.forms["myForm"]["message"].value;
    // if (x == "") {
    //     alert("Please enter message");
    //     return false;
    // }
    var email = document.getElementById('inputEmail').value;
    var phone_no = document.getElementById('inputPhNumber').value;
    var subject = document.getElementById('inputSubject').value;
    var hospital = document.getElementById('inputHospital').value;
    var message = document.getElementById('message').value;
    // alert(message_for);
    
    if(email == "")
    {
        alert("Email must be filled out");
        return false;
    }
    else if(phone_no == "")
    {
        alert("Phone number must be filled out");
        return false;
    }
    else if(phone_no.length != 10)
    {
        alert("Phone number is in wrong format ");
        phone_no.focus();
        return false;
    }
    else if(subject == "")
    {
        alert("Subject must be filled out");
        return false;
    }
    else if(message == "")
    {
        alert("Message must be filled out");
        return false;
    }
    else if(hospital == "")
    {
        alert("Hospital must be selected");
        return false;
    }
    database.child('Query').push({
        email: email,
        phone_no: phone_no,
        subject : subject,
        message: message,
        hospital : hospital,
        feed_date: d + "/" + m + "/" + y,
        feed_time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    });
    alert('Query Submitted');
    location.reload();
    // end of storing data
};