/**
 * Sign up form 
 */


const singup_form = document.querySelectorAll('#singup_form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const uname = document.querySelector('#uname');
const msg = document.querySelector('.msg');


/**
 * Sign Up form functions
 * @param {*} e 
 */




singup_form[0].onsubmit = (e) =>{

    e.preventDefault();

    let pattern = /^[A-Za-z0-9]*$/;

    if( name.value == '' || email.value == '' || uname.value == '' ){
        msg.innerHTML = ` <p class="alert alert-danger"> All fildes are requerd ! </p> `;

    }else{

        msg.innerHTML = ` <p class="alert alert-success"> Data stable ! </p> `;

    };

    

    if( name.value == '' ){

        name.style.border = ` 1px solid red `;

    }else{

        name.style = ` border: 1px solid black `;
    };
    if( email.value == '' ){

        email.style.border = ` 1px solid red `;

    }else{

        email.style = ` border: 1px solid black `;
    };
    if( uname.value == '' ){

        uname.style.border = ` 1px solid red `;

    }else{

        uname.style = ` border: 1px solid black `;
    };
    

    

};



/**
 * Age calculator start
 */



/**
 * Age calculator end
 */






/**
 * Marriage Approval function start
 * 
 * @param {*} year 
 * @returns 
 * 
 */

 const gender = document.querySelector('#gender');
 const year = document.querySelector('#yearOfBirth');
 const check = document.querySelector('#check');
 const approvalResult = document.querySelector('#approval');




 check.addEventListener('click', (e) => {

    e.preventDefault();
    
    let date = new Date();
    let age = (date.getFullYear() - year.value);

    console.log(age);

    if(gender.value == '' || year.value == ''){
        approvalResult.innerHTML = ` <p class="alert alert-danger">ALL fields are required!!!</p> `;
    }else{

        approvalResult.innerHTML = approvalFunc(age);
        gender.value = '';
        year.value = '';

    }

});




 let approvalFunc = (year) => {

    if(gender.value == 'male' || gender.value == 'Male' || gender.value == 'MALE'){

        if(year >= 0 && year <= 20){
            return `<p class="alert alert-warning">Please wait. Your age is ${year} years old. According to the law of Bangladesh, you are not old enough to get married yet. You are not eligible for marriage until you are 21 years old. So, you have to wait ${21 - year} years.</p>`;
        }else if(year >= 21 && year <= 80){
            return `<p class="alert alert-success">Congratulations! Your age is ${year} years old. So, You have reached the age of marriage. You can get married!!!</p>`; 
        }

    }else if(gender.value == 'female' || gender.value == 'Female' || gender.value == 'FEMALE'){

        if(year >= 0 && year <= 17){
            return `<p class="alert alert-warning">Please wait. According to the law of Bangladesh, you are not old enough to get married yet. You are not eligible for marriage until you are 18 years old. So, you have to wait ${18 - year} years.</p>`;
        }else if(year >= 18 && year <= 70){
            return `<p class="alert alert-success">Congratulations! Your age is ${year} years old. So, You have reached the age of marriage. You can get married!!!</p>`;
        }

    }else{
        return `<p class="alert alert-danger">Please, Write male or female!</p>`;
    }

};




/**
 * Marriage Approval function end
 */


