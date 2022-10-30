/* Add your JavaScript to this file */

window.onload = function(){

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = this.document.querySelector('#email');
    let message = this.document.querySelector('.message');

    this.addEventListener('submit',(event)=>{

    event.preventDefault();

    if(email.value.length != 0 && emailRegex.test(email.value.toLowerCase())){

        message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        email.value = ''

    }else{

        message.innerHTML = "Please enter a valid email address."
        email.value = ''
    }})

}