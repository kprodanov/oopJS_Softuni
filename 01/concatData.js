function concatenatedata(input) {
let firstName = input[0];
let lastName = input[1];
let age = input[2];
let city = input[3];
let message =`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`;
console.log(message);
}

concatenatedata(['Maria', 'Ivanova', 20, 'Sofia'])
