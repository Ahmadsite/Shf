//Declaring value variables
var container = document.querySelector('.doc-container')
var payerValue = document.querySelector('.payer-value')
var phoneNumber = document.querySelector('.phone-number')
var vehicleNumber = document.querySelector('.vehicle-number')
var vehicleType = document.querySelector('.vehicle-type')
var originState = document.querySelector('.origin-state')
var originLGA = document.querySelector('.origin-lga')
var destinationState = document.querySelector('.destination-state')
var destinationLGA = document.querySelector('.destination-lga')
var contactValue = document.querySelector('.contact-value')
var terminalInput = document.querySelector('#terminal-input')
var terminalID = document.querySelector('.terminal-id')
var amount = document.querySelector(".amount")
var amountInput = document.querySelector(".amount-input")
var buttonHolder = document.querySelector(".buttons-holder")
var resetButton = document.querySelector(".reset")
var addAnother = document.querySelector(".add-another")
var printer = document.querySelector(".printer")
var otherReference = document.querySelector(".other-reference")
var qrImage = document.querySelector(".qr-image")



// Value Variable Ends

//declaring input variable
var nameInput = document.getElementById('name-input')
var phoneInput = document.getElementById('phone-input')
var vehicleNumberInput = document.getElementById('vehicle-number-input')
var vehicleTypeInput = document.getElementById('vehicle-type-input')
var originStateInput = document.getElementById('origin-state-input')
var originLGAInput = document.getElementById('origin-lga-input')
var destinationStateInput = document.getElementById('destination-state-input')
var destinationLGAInput = document.getElementById('destination-lga-input')
var contactInput = document.getElementById('contact-input')
//var nameInput = document.getElementById('name-input').value
document.cookie = "name=value; expires=Thu, 01 Jan 1970 00:00:00 GMT";


//input variable Ends

var inputInfo = document.querySelector('.input-info')


//working with dateValue

var dateValue = document.querySelector(".date")
function formattedDate(date){
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")
    formatDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    dateValue.innerText = formatDate
    var todayDate = document.querySelector('.today-date').innerText = formatDate
}
function resetText(){
    payerValue.innerText = "";
    phoneNumber.innerText = ""
    vehicleNumber.innerText = "";
    vehicleType.innerText = "";
    originState.innerText = "";
    originLGA.innerText = "";
    destinationState.innerText = ""
    destinationLGA.innerText = ""
    contactValue.innerText = ""
    terminalID.innerText = ""
    
}
function eraseText(){
    nameInput.value = "";
    phoneInput.value = ""
    vehicleNumberInput.value = "";
    vehicleTypeInput.value = "";
    originStateInput.value = "";
    originLGAInput.value = "";
    destinationStateInput.value = ""
    destinationLGAInput.value = ""
    contactInput.value = ""
    amountInput.value = ""
    
}
function addAmount(){
    if (vehicleTypeInput.value == "12/14 Tyres and its equivalent"){
        amountInput.innerText = "19250"
    }
    else if (vehicleTypeInput.value == "18 Tyres and its equivalent"){
        amountInput.innerText = "25250"
    }
    else if (vehicleTypeInput.value == "22 Tyres and its equivalent"){
        amountInput.innerText = "25250"
    }
    else if(vehicleTypeInput.value == "Luxury Buses and its equivalent"){
        amountInput.innerText = "10250"
    }
    else if (vehicleTypeInput.value == "Pick up and its equivalent (4 Tyres)"){
        amountInput.innerText = "4250"
    }
    else if (vehicleTypeInput.value == "Pick up and Heavy Duties 6/8 Tyres"){
        amountInput.innerText = "8250"
    }
}
var code = document.querySelector(".code")
function codeSwap(){
    var blocker = document.querySelector(".blocker")
    if (code.value == 1414){
        blocker.style.display = "none"
    }
    
}
function update(){
    
    payerValue.innerText = nameInput.value
    phoneNumber.innerText = phoneInput.value
    vehicleNumber.innerText = vehicleNumberInput.value
    vehicleType.innerText = vehicleTypeInput.value
    
    originState.innerText = originStateInput.value
    originLGA.innerText = originLGAInput.value
    
    destinationState.innerText = destinationStateInput.value
    destinationLGA.innerText = destinationLGAInput.value
    
    terminalID.innerText = terminalInput.value
    
     otherReference.innerText = `77${randomDigits()}${randomDigits()}${randomLetters()}${randomLetters()}${randomDigits()}${randomLetters()}${randomLetters()}${randomDigits()}`
    contactValue.innerText = contactInput.value
    amount.innerText = amountInput.innerText
    buttonHolder.style.display = 'flex'
    /*
    .innerText = .value
    .innerText = .value
    vehicleType.innerText = vehicleTypeInput.value
    
    */
    
}
function saveData() {
    // Create an AJAX request
    var xhr = new XMLHttpRequest();
    var url = "save_data.php?t=" + new Date().getTime(); // Append timestamp to URL
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display response from server (if any)
            console.log(xhr.responseText);
            // Optionally, perform actions based on the server response
        }
    };
    // Prepare data to send
    var data = "full_name=" + encodeURIComponent(nameInput.value) +
               "&mobile_number=" + encodeURIComponent(phoneInput.value) +
               "&vehicle_number=" + encodeURIComponent(vehicleNumberInput.value) +
               "&vehicle_type=" + encodeURIComponent(vehicleTypeInput.value) +
               "&origin_state=" + encodeURIComponent(originStateInput.value) +
               "&origin_lga=" + encodeURIComponent(originLGAInput.value) +
               "&destination_state=" + encodeURIComponent(destinationStateInput.value) +
               "&destination_lga=" + encodeURIComponent(destinationLGAInput.value) +
               "&contact=" + encodeURIComponent(contactInput.value) +
               "&terminal_id=" + encodeURIComponent(terminalInput.value) +
               "&amount=" + encodeURIComponent(amountInput.innerText);
    // Send the request
    xhr.send(data);
}

document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    saveData(); // Call the saveData function to send data via AJAX
});
function loadScript(url) {
            var script = document.createElement('script');
            script.src = url + "?t=" + new Date().getTime(); // Append timestamp to URL
            document.head.appendChild(script);
        }

        function loadStylesheet(url) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url + "?t=" + new Date().getTime(); // Append timestamp to URL
            document.head.appendChild(link);
        }

        document.addEventListener('DOMContentLoaded', function() {
            loadScript('javascript/script.js');
            loadStylesheet('css/styles.css');
        });



function addAnotherContent(){
    inputInfo.style.display = "flex"
    container.style.display = "none"
    buttonHolder.style.display = "none"
}
function randomDigits(){
    const digits = Math.floor(Math.random()*99)
    const genDigits = String(digits).padStart(2, "0")
    return genDigits
}
function randomLetters(){
    const letters = ["A", "B", "C", "D", "E"]
    const  genLetters = letters[Math.floor(Math.random()*letters.length)]
    return genLetters
}
function done(){
    if (nameInput.value != "" && vehicleNumberInput.value != "" && phoneInput.value != "" && originStateInput.value != "" && originLGAInput.value != "" && destinationStateInput.value != "" && destinationLGAInput.value != "" && contactInput.value != "" ){
        
        setTimeout(function(){
            
            update()
            inputInfo.style.display = "none"
            container.style.display = "block"
            buttonHolder.style.display = "flex"
            
            const shfData =   `${payerValue.innerText}\nPhone Number: ${phoneNumber.innerText}\nVehicle Number: ${vehicleNumber.innerText}\nVehicle Type: ${vehicleType.innerText}\nOrigin State: ${originState.innerText}\nOrigin LGA: ${originLGA.innerText}\nDestination State: ${destinationState.innerText}\nDestination LGA: ${destinationLGA.innerText}\nContact: ${contactValue.innerText}\n${otherReference.innerText}\nTerminal ID: ${terminalID.innerText}\nDate: ${dateValue.innerText}\nAmount Paid: ${amount.innerText}\nStatus: APPROVED`;
            
            const encodedData = encodeURIComponent(shfData)
            qrImage.src = "https://quickchart.io/qr?text=" + "Name: " +encodedData 
            /*https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=*/
    

        },2000)
        saveData()

    }
}
function printPage(){
    buttonHolder.style.display = "none"
    var restorepage = document.body.innerHTML;
    var printContent = container.innerHTML
    document.body.innerHTML = printPage
    window.print()
    document.body.innerHTML = restorepage
    

}
printer.addEventListener("click", ()=>{
    //printPage()
    document.querySelector('.buttons-holder').style.display = "none"
    setTimeout(function(){
        window.print()
    }, 2000)
})
addAnother.addEventListener('click', ()=>{
    addAnotherContent()
})
resetButton.addEventListener("click", function(){
    resetText()
})

formattedDate(new Date())