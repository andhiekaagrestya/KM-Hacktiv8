// Input Change
function displayChange(){
    let name = document.getElementById("name-input").value;
    let role = document.getElementById("role-input").value;
    let avail = document.getElementById("avail-input").value;
    let age = document.getElementById("age-input").value;
    let loct = document.getElementById("loct-input").value;
    let exp = document.getElementById("exp-input").value;
    let email = document.getElementById("email-input").value;
    if(name || role || avail || age || loct || exp || email){
        document.getElementById("name").innerHTML = name;
        document.getElementById("role").innerHTML = role;
        document.getElementById("avail").innerHTML = avail;
        document.getElementById("age").innerHTML = age;
        document.getElementById("loct").innerHTML = loct;
        document.getElementById("exp").innerHTML = exp;
        document.getElementById("email").innerHTML = email;
    }
}

// Clear Input After Submit
let btnSubmit = document.querySelector('#btn-submit');
let input = document.querySelectorAll('input');

btnSubmit.addEventListener('click', () => {
    input.forEach(input => input.value = '');
});

// Change Photo Form Local Storage
const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

file.addEventListener('change', function(){
    
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});