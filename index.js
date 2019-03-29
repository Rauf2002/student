'use strict'

function Structure(ad, soyad, yas, email, id) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
    this.email = email;
    this.id = id;

}
let arrayPeople = [];
let wrapper = document.querySelectorAll('#body')[0]


function submitPerson() {
    let name = document.forms['register']['name'].value;
    let surname = document.forms['register']['surname'].value;
    let birthday = document.forms['register']['birthday'].value;
    let email = document.forms['register']['email'].value;
    let id = arrayPeople.length + 1;
    let age = calculateAge(birthday);
    let Person = new Structure(name, surname, age, email, id);
    arrayPeople.push(Person);
    displayNames()
    deletePeople()
    console.log(arrayPeople)
}

// Cedvelde adi gosteririk :
function displayNames() {
    let list = '<table>'
    for (let i = 0; i < arrayPeople.length; i++) {
        list += '<tr><th scope="row">' + arrayPeople[i].id + '</th>' + '<td>' + arrayPeople[i].name + '</td>' + '<td>' + arrayPeople[i].surname + '</td>' + '<td>' + arrayPeople[i].age + '</td>' + '<td>' + arrayPeople[i].email + '</td></tr>'
    }
    list += '</table>';
    wrapper.innerHTML = list;
    deletePeople()
    
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
    let idNumber = document.querySelectorAll('#delInput')[0].value;
    for (let i = 0; i < arrayPeople.length; i++) {
    }

    console.log(idNumber)
}
