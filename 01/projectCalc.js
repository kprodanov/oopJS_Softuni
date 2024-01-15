function hello(input) {
  let firstName = input[0];
  let projectCount = input[1];
  let hourWorkTime = projectCount * 10;
  let message = `The developer ${firstName} will need ${hourWorkTime} hours to complete this ${projectCount} project/s. `;
  console.log(message);

  document.getElementById('output').innerText = message;
  let message2 = "Now i want to sleep... for about 10 hours..."
  document.getElementById('output2').innerText = message2;
}
hello(["Christiyan", "1"]);
