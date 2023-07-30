// Code your solutions in this file
function writeCards(strings, event){
    const message = [];
    for (let i = 0; i < strings.length; i++){
        message.push(`Thank you, ${strings[i]}, for the wonderful ${event} gift!`)
    }
    return message
}
function countDown(int){
    while(int >= 0){
        console.log(int--);
    }
    
}