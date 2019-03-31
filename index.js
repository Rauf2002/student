'use strict'


let arrayPeople = [];
let names = [];


function validateForm() {
    let name = document.forms['register']['name'].value;
    let surname = document.forms['register']['surname'].value;
    let birthday = document.forms['register']['birthday'].value;
    let email = document.forms['register']['email'].value;
    if (name == "" || surname == "" || birthday == "" || email == "") {
        alert('All of the inputs must be filled.')
        return false
    }
    else {
        return submitPerson()
    }
    
}

function Structure(ad, soyad, yas, email, id) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
    this.email = email;
    this.id = id;

}

function submitPerson() {
    let name = document.forms['register']['name'].value;
    let surname = document.forms['register']['surname'].value;
    let birthday = document.forms['register']['birthday'].value;
    let email = document.forms['register']['email'].value;
    let id = arrayPeople.length + 1;
    let age = calculateAge(birthday);
    let Person = new Structure(name, surname, age, email, id);
    arrayPeople.push(Person);
    namesArray();
    displayNames();
    emailIsValid();
    console.log(arrayPeople);
    console.log(names)
    console.log(typeof name)
}
// Cedvelde adi gosteririk :

let wrapper = document.querySelectorAll('#body')[0]

function displayNames() {
    let list = '<table>';
    for (let i = 0; i < arrayPeople.length; i++) {
        list += `<tr><th scope="row"> ${arrayPeople[i].id} </th> <td> ${arrayPeople[i].name} </td><td> ${arrayPeople[i].surname} </td><td> ${arrayPeople[i].age} </td> <td> ${arrayPeople[i].email} </td></tr>`;
    }
    list += '</table>';
    wrapper.innerHTML = list;
}

// Yasi tapiriq :

function calculateAge(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}

// ID silirik :

function deletePeople() {
    let inputText = document.querySelector("#delInput").value;
    for (let index = 0; index < arrayPeople.length; index++) {
        if (arrayPeople[index].id == inputText) {
            arrayPeople.splice(index, 1);
            displayNames();
        }
    }
}


// Siralama

function namesArray() {
    for (let index = 0; index < arrayPeople.length; index++) {
        let lower = arrayPeople[index].name.toLowerCase();
        names.push(lower);
        sortTable()
        document.getElementsByTagName('td').innerHTML = names
    }
    displayNames()
}

function sortTable() {
    names.sort()
}
