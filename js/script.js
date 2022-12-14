$(document).ready(function(){

    /* Этапы разработки слайдер */
    $('#slider1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        nextArrow: '<button class="arr-next"></button>',
        prevArrow: '<button class="arr-previous"></button>',
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                variableWidth: false,
              }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
          ]
    });

    /* Портфолио слайдер */

    $('#slider2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: '<button class="arr-next"></button>',
        prevArrow: '<button class="arr-previous"></button>',
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 1,
                }
            }
        ],
    
    });
});



/* Валидация формы */

const inputName = document.getElementById('input-name');
const nameError = document.getElementById('name-error');

inputName.addEventListener('focus', () => {
    nameError.innerHTML = " ";
    nameError.style.display = "none";
    inputName.classList.remove("speak__input-error");
})

/*Валидация для телефона*/ 
const inputPhone = document.getElementById('input-phone');
const phoneError = document.getElementById('phone-error');
const mobilePhonePattern =  /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const isMobilePhone = (str) => mobilePhonePattern.test(str);

let isErrorPhone = false;

inputPhone.addEventListener('blur', () => {
    const value = inputPhone.value;
    let errorText = "";
    
    if(!isMobilePhone(value) && value !== '') {
        errorText = "Некорректный номер телефона";
        isErrorPhone = true;
    }

    else {
        isErrorPhone = false
    }

    if(isErrorPhone) {
        phoneError.innerHTML = errorText;
        phoneError.style.display = "block";
        inputPhone.classList.add("speak__input-error");
    }
})

inputPhone.addEventListener('focus', () => {
    phoneError.innerHTML = " ";
    phoneError.style.display = "none";
    inputPhone.classList.remove("speak__input-error");
})

/*Валидация для email*/
const inputEmail = document.getElementById('input-email');
const emailError = document.getElementById('email-error');
const emailPattern =  /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

const isEmail = (str) => emailPattern.test(str);

let isErrorEmail = false;

inputEmail.addEventListener('blur', () => {
    const value = inputEmail.value;
    let errorText = "";
    
    if(!isEmail(value) && value !== '') {
        errorText = "Некорректный адрес электронной почты";
        isErrorEmail = true;
    }

    else {
        isErrorEmail = false
    }

    if(isErrorEmail) {
        emailError.innerHTML = errorText;
        emailError.style.display = "block";
        inputEmail.classList.add("speak__input-error");
    }
})

inputEmail.addEventListener('focus', () => {
    emailError.innerHTML = " ";
    emailError.style.display = "none";
    inputEmail.classList.remove("speak__input-error");
})

/*После нажатия отправить*/

const formElem = document.getElementById('form-elem');

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    isEmptyInput = false;

    const errorTextEmpty = "Заполните поле";

    if(inputName.value.length <= 0) {
        isEmptyInput = true;
        nameError.innerHTML = errorTextEmpty;
        nameError.style.display = "block";
        inputName.classList.add("speak__input-error");
    }
    if(inputPhone.value.length <= 0) {
        isEmptyInput = true;
        phoneError.innerHTML = errorTextEmpty;
        phoneError.style.display = "block";
        inputPhone.classList.add("speak__input-error");
    }
    if(inputEmail.value.length <= 0) {
        isEmptyInput = true;
        emailError.innerHTML = errorTextEmpty;
        emailError.style.display = "block";
        inputEmail.classList.add("speak__input-error");
    }

    if(!isErrorPhone && !isErrorEmail && !isEmptyInput) {
        console.log('send')
    }
    else {
        console.log('error')
    }

})

/* Меню toggle  */


const menuBtn = document.getElementsByClassName("menu-dots")[0];
const menu = document.getElementsByClassName("menu")[0];

menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle('menu-active');
    console.log(1);
    e.stopPropagation()
})

function menuClose() {
    menu.classList.remove('menu-active');
}

const links = document.querySelectorAll('.menu a');

links.forEach((link)=> {
    link.addEventListener('click', menuClose);
})

window.addEventListener('click', function(e){
    if (!document.getElementsByClassName('menu')[0].contains(e.target)){
        menuClose()
    }
});
