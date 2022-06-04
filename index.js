
  
function validateFormValue() {
    let inputName = document.getElementById("name").value;
    let option = document.getElementById("tiers").value;
    let user = [];
    let userDetails = {name:inputName, option};
    user.push(userDetails);
    localStorage.setItem(inputName,JSON.stringify(user));

    alert(option)
}