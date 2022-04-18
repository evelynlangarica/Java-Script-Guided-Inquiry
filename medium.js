let message = "HELLO";
if (message === message.toLowerCase()) {
    console.log('Are you sure you want to send your message in all lower case?');
}
else if (message === message.toUpperCase()) {
    console.log("Are you sure you want to send your message in all caps?");
}
else {
    console.log("Your message is sufficient.");
}