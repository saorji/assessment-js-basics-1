/*
Directions

Create a new file called password.js. Write a program that does the following:

Create a variable called password and set it’s value to a string of your choice.
Write a conditional statement that checks if the password meets the following constraints:

At least 10 characters long
Contains at least one letter and one number
If the password meets the constraint, console log a success message.

If the password fails the constraint, console log a failure message.

Test out your conditional by changing the value of your password variable and running your file!
*/

let password = 'Devmountain&brightPath';

if(password.length >= 10 && /\d/.test(password) && /[A-Za-z]/.test(password)){
    console.log(`Successful`)
} else {
    console.log(`Failed`)
}


// EXTRA CREDIT 

// Check for presence of uppercase, lowercase, at least 20 characters long,
// must include special character; 
// my special characters: !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~
// use ascii to display sucess message if all requirement met

if(password.length < 20) {
    console.log(`Your password needs a minimum of 20 characters`)
} else if (password.search(/[a-z]/) < 0) {
    console.log(`Your password needs a lower case letter`)
}else if(password.search(/[' ']/) > 0) {
    console.log(`Your password contain space`)
}else if(password.search(/[A-Z]/) < 0) {
    console.log(`Your password needs a upper case letter`)
} else if(password.search(/[0-9]/) < 0) {
    console.log(`Your password needs a number`)
}else if (password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
    console.log(`Your password is missing special character`)
}else {
    console.log(`                                                
    ________ __   ____  ____  ____   ______ ______
   /  ___/  |  \_/ ___\/ ___\/ __ \ /  ___//  ___/
   \___ \|  |  /\  \__\  \__\  ___/ \___ \ \___ \ 
  /____  >____/  \___  >___  >___  >____  >____  >
       \/            \/    \/    \/     \/     \/ `)
}