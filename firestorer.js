// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});
db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

function setConditionDate() {
    var hasCondition = document.getElementById('inputConditions');
    if (hasCondition.options[hasCondition.selectedIndex].value != '0') {
        document.getElementById('conditionsDate').hidden = false;
    } 
    else {
        document.getElementById('conditionsDate').hidden = true;
    }
}
function setDiseaseDate(){
    var hasDisease = document.getElementById('inputDiseases');
    if (hasDisease.options[hasDisease.selectedIndex].value != '0') {
        document.getElementById('diseaseDate').hidden = false;
    } 
    else{
        document.getElementById('diseaseDate').hidden = true;
    }
}

function formReset(){
    document.getElementById('diseaseDate').hidden = true;
    document.getElementById('conditionsDate').hidden = true;
}
function addInfo() {
    var email = document.getElementById('inputEmail').value;
    var phnum = document.getElementById('inputPhNumber').value;
    var addr = document.getElementById('inputAddress').value;
    var addr2 = document.getElementById('inputAddress2').value;
    var city = document.getElementById('inputCity').value;
    var StateEle = document.getElementById('inputState');
    var stateIndex = StateEle.selectedIndex;
    var state = StateEle.options[StateEle.selectedIndex].text;
    var zip = document.getElementById('inputZip').value;
    var bgroup = document.getElementById('inputBloodGroup').value;
    var GenderEle = document.getElementById('inputGender');
    var gender = GenderEle.options[GenderEle.selectedIndex].text;
    var hasCondition = document.getElementById('inputConditions');
    var conditionDuration = hasCondition.options[hasCondition.selectedIndex].value;
    var conditionStart = 0;
    if(conditionDuration != '0'){
        var cstrt = new Date(document.getElementById('inputConditionsDate').value);
        conditionStart = cstrt.getTime();
    }
    var hasDisease = document.getElementById('inputDiseases');
    var diseaseDuration = hasDisease.options[hasDisease.selectedIndex].value;
    var diseaseStart = 0;
    if (diseaseDuration != '0') {
        var dstrt = new Date(document.getElementById('inputDiseasesDate').value);
        diseaseStart = dstrt.getTime();
    }
    var conditionEnd = Number(conditionDuration) + conditionStart;
    var diseaseEnd = Number(diseaseDuration) + diseaseStart;
    var conditionIndex = hasCondition.selectedIndex;
    var diseaseIndex = hasDisease.selectedIndex;
    var pData = {
        u_email: email,
        u_phnum: phnum,
        u_addr: addr,
        u_addr2: addr2,
        u_city: city,
        u_state: state,
        u_zip: zip,
        u_bgroup: bgroup,
        u_gender: gender,
        u_conditionEnd: conditionEnd,
        u_diseaseEnd: diseaseEnd,
        u_selCondition: conditionIndex,
        u_selDisease: diseaseIndex,
        u_stateIndex: stateIndex 
    };
    db.collection("pdets").doc(uid).set(pData).then(function () {
        console.log("Document successfully written!");
        alert('Data Added Succesfully!');
    }).catch(function (error) {
        console.error("Error writing document: ", error);
    });
    return false;
}