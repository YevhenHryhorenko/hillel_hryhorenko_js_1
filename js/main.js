let userName;

while (true) {
    userName = prompt('Please, enter your name below:');
    
	if (userName == "John") {
        alert(`Hello, ${userName}! How are you?`);
        break;
    } else {
        alert('Your name is wrong, please, try again');
	}
}
