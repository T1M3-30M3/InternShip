let showpass = document.querySelector('.showpassword');
let passInp = document.querySelector(".passwordinput");
let passcheck = document.querySelectorAll(".listitem");

showpass.addEventListener('click',() =>{

    showpass.classList.toggle('fa-eye');
    showpass.classList.toggle('fa-eye-slash');

    passInp.type = passInp.type === 'password' ? 'text' : 'password' ;
});

let validationRegex = [
    { regex: /.{8,}/ }, 
    { regex: /[0-9]/ }, 
    { regex: /[a-z]/ }, 
    { regex: /[A-Z]/ },  
    { regex: /[^A-Za-z0-9]/ } 
];

passInp.addEventListener('keyup', () =>{
    validationRegex.forEach((item, i) =>{

        let isValid = item.regex.test(passInp.value);
        if(isValid){
            passcheck[i].classList.add('checked');
        }else{
            passcheck[i].classList.remove('checked');
        }


    });
});