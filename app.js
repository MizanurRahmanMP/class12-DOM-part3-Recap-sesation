
/**
 * Currency Converter start
 */

const currency = document.querySelector('#currency');

const amount = document.querySelector('#name2');

const result = document.querySelector('#result');

const submit = document.querySelector('#submit2');

submit.addEventListener('click', (e) => {

    e.preventDefault();

    if( amount.value == '' || currency.value == '' ){
        result.innerHTML = ` <p class="alert alert-danger"> all fildes are requerd </p> `;
    }else{
        let painelresult = (amount.value * currency.value);

        result.innerHTML = ` <p class="alert alert-success"> ${ painelresult.toFixed(2) } BDT </p> `;
        
    };

});



/**
 * Currency Converter end
 */



/**
 * age calculation
 */

const agecal = document.querySelector('#agecal2');
const form_name = document.querySelector('#form_name');
const form_year = document.querySelector('#form_year');
const result2 = document.querySelector('#result2');

agecal.addEventListener('click', (e) => {

    e.preventDefault();

    result2.innerHTML = ageCal(form_name.value, form_year.value);
    form_name.value = '';
    form_year.value = '';
});

function ageCal(name, year){
    let date = new Date();
    let age = (date.getFullYear() - year);

    let ageStatus = checkAgeStatus(age);

    return `<p class="alert alert-${ ageStatus.status }">Hi ${ name }, You are ${ age } years old and ${ ageStatus.position }</p> `;
};








/**
 * Age Calculation
 */


 function checkAgeStatus(age){

    if(age >= 0 && age <= 10){
        return {
            position        : 'children',
            val             : 'success'
        };
    }else if(age >= 11 && age <= 18){
        return {
            position        : 'teenager',
            val             : 'primary'
        };
    }else if(age >= 19 && age <= 35){
        return {
            position        : 'young man',
            val             : 'info'
        };
    }else if(age >= 36 && age <= 55){
        return {
            position        : 'older',
            val             : 'warning'
        };
    }else if(age >= 56 && age <= 150){
        return {
            position        : 'old man',
            val             : 'danger'
        };
    }else{
        return {
            position        : 'Not Eligible',
            val             : 'secondary'
        };
    }

};









