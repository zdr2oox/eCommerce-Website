//Login Show 

function showLogin() {
    console.log('show')
    $('.login-background').removeClass('login-invis');
    $('.login-wrap').removeClass('login-invis');
}


//Login Close 
document.addEventListener('keydown', function(e) {
if( e.key === 'Escape') loginClose()
});


function loginClose () {
const element = document.querySelector(".login-wrap");
if (!element.classList.contains("login-invis")){
    $('.login-background').addClass('login-invis');
    $('.login-wrap').addClass('login-invis');
    console.log("done")
}
}


//Login validation
const numbers = /[0-9]/g;
const upperCaseLetters = /[A-Z]/g;
const specials = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
function validateLogin(event) {

    const pass = document.forms["login"]["password"].value;

    if( pass.length < 6 || 
            !pass.match(numbers) || 
            !pass.match(upperCaseLetters) || 
            !pass.match(specials) ) {
        event.preventDefault()
        const invalid = 'At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character';
        $('.invalid').text(invalid);
        
    } else {
        $('.invalid').text('');
    }
}


//Login toggle password visibility 

function showPass() {
    const pass = document.getElementById('password');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}

