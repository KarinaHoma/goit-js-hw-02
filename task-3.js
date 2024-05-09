function checkForSpam(message) {
  const newMessage = message.toLowerCase();

  if (newMessage.includes(`sale`) || newMessage.includes(`spam`)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Hurry up, buy now!")); // true
console.log(checkForSpam("Great deals in our sale!")); // true
console.log(checkForSpam("Hello, how are you?")); // false
