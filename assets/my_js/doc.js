// function loginValidation(){
//     let username = document.forms['lform'] ['username'].value 
//     let password = document.forms['lform'] ['password'].value
//     if (username == "" ){
// alert("input Username")
//     }else if(username <= admin.length){
//         alert("Username too short")
//     }else if(username == "Donicres" && password == 123456){
//     }else{
//         alert('wrong user, please try again!!!')
//     }

// }



// create account page

function createAccount() {
    var gender = document.getElementsByClassName('validationGender').value
    displayGender.innerHTML = gender
    var fullName = document.getElementById('validationCustom01').value
    displayFullname.innerHTML = fullName
    var username = document.getElementById('inputGroupPrepend').value
    displayUsername.innerHTML = username
    var password = document.getElementById('validationCustomPassword').value
    displayPassword.innerHTML = password
    var age = document.getElementById('validationCustomAge').value
    displayAge.innerHTML = age
    var phoneNumber = document.getElementById('validationCustomNumber').value
    displayPhoneNumber.innerHTML = phoneNumber
    var occupation = document.getElementById('validationCustomWork').value
    displayOccupation.innerHTML = occupation
    var country = document.getElementById('validationCustomCountry').value
    displayCountry.innerHTML = country
    var city = document.getElementById('validationCustomCity').value
    displayCity.innerHTML = city
    var zipcode = document.getElementById('validationCustomZip').value
    displayZipcode.innerHTML = zipcode
}

var signUp = createAccount()
localStorage.setItem('custInfo', signUp)
localStorage.getItem('custInfo')
document.write(localStorage.getItem('custInfo'))

function submit() {
    var saveData = localStorage.setItem('custInfo', signUp)
    if(saveData == ''){
    alert('Thank you for joinning our team')
    window.location.assign('home.html')
    }

}



var customerValidation = localStorage.getItem('custInfo')
display1.innerHTML = customerValidation


class CustomerAcount{
    constructor(username, password){
        this.username = username
        this.password = password
    }

    login(){
        document.write("Login Successfull")
        alert("Welcome to T-EMOIRE")
         window.location.assign('home.html')
    }

    logout(){
        document.write("See you soon!!!")
        alert("goodbye")
        window.location.assign('login.html')
    }

    deleteAccount(){
        document.write("Thank you for using our service..")
        alert("Have a nice day")
        window.location.assign('sign_up.html')
    }
}





    //login page

function login() {
    var username = "donicres"
    var password = 12345;
    if (username === "donicres" && password === 12345) {
       

    } else {
        document.write('access denied')
    }
}






// home page 



class Transaction{
    constructor(loan,payment){
         this.loan = loan
         this.payment = payment
    }
   
    askLoan(){
        var loan = document.getElementById("inputAmount").value
        displayBalance.innerHTML = loan
        if(loan >= 100000 ){
            alert("Please not enough fonds")
        }else if(loan === 5000 || loan <= 100000){
            document.write("Congratzzz your account has been credited")
            alert("please check current balance")
            location.assign("home.html")
        }else{
            alert("Amount too small")
        }
    }

    payLoan(){
        var supply = document.getElementById("supplyAmount").value
        displayBalance.innerHTML = supply
        if(supply === 5000 || supply <= 100000){
            alert("Thanks for paying")
            location.assign("home.html")
    }else if (supply >= 100000){
        alert("Thanks for being generous")
        location.assign("home.html")
    }else{
        alert("Amount too small")
    }
}

accountBalance(loan,supply){
    return loan - supply
    let debt = askLoan()
    
}


}

function changeText() {
    document.getElementById('headingText').innerHTML = 'Goodbye my Son !!'
    alert('text change')

}


// // Example: Update widget 1 every 5 seconds
// setInterval(function() {
//     var widget1 = document.getElementsByClassName("comLogo");
//     widget1.innerHTML = "Updated Widget 1 Content";
//   }, 5000);
  

