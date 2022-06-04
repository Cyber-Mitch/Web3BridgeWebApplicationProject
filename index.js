function CalInterest() {
    let inputName = document.querySelector('input[type=text]').value;
    let option = document.querySelector('select#tiers').value;
    let user = [];
    let userDetails = {name:inputName, option};
    user.push(userDetails);
    localStorage.setItem(inputName,JSON.stringify(user));
    
    if(option == 10000){
        document.getElementById("p1").innerHTML = "Your Interest will be " + (option/100) * 7 ;
        document.getElementById("p2").innerHTML = "Your Weekly Total will be " + (option/100) * (100+7) ;
    }
    else if(option == 20000){
        document.getElementById("p1").innerHTML = "Your Interest will be " + (option/100) * 12 ;
        document.getElementById("p2").innerHTML = "Your Weekly Total will be " + (option/100) * (100+7);
    }
    else if(option == 30000){
        document.getElementById("p1").innerHTML = "Your Interest will be " + (option/100) * 25 ;
        document.getElementById("p2").innerHTML = "Your Weekly Total will be " + (option/100) * (100+7);
    }
}