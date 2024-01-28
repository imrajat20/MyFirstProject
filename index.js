function handleFormSubmit(event){
    event.preventDefault();
    let myObj = {
        amount : event.target.name.value,
        description : event.target.descript.value,
        select : event.target.category.value
      
    };
    let myObj_serial = JSON.stringify(myObj);
    localStorage.setItem(myObj.select, myObj_serial);
    const  string=myObj.amount+"-"+myObj.description+"-"+myObj.select;
    const newLi = document.createElement('li');
    newLi.setAttribute('data', myObj.select);
    newLi.innerHTML=string+'<button class="delete-btn">Delete</button><button class="edit-btn">Edit</button>';
    const list = document.querySelector("ul");
    list.appendChild(newLi);
}
document.addEventListener('DOMContentLoaded', function () {
    const userList = document.querySelector('ul');
       userList.addEventListener('click', function (event) {
           if (event.target.classList.contains('delete-btn')) {
               const expense = event.target.parentElement.getAttribute('data');
               localStorage.removeItem(expense);
               userList.removeChild(event.target.parentElement);
              
           }
              else if (event.target.classList.contains('edit-btn')) {
               const expense = event.target.parentElement.getAttribute('data');
               const userString = localStorage.getItem(expense);
               const userObj = JSON.parse(userString);
               document.getElementById('name').value = userObj.amount;
               document.getElementById('descript').value = userObj.description;
               document.getElementById('category').value = userObj.select;
               localStorage.removeItem(userEmail);
               userList.removeChild(event.target.parentElement);
           }
       });
   });
Module.exports = handleFormSubmit;