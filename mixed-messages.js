function generateMessage(){
    const greetings = ["Meehowdy cowboy! ", "Hola Senorita! ", "Bonjour mademoiselle... ", "What's crackin' Lupin? "];
    const questions = ["Do you want some things? ", "I hope you've seen the ocean in your eyes, in a mirror. ", "Don't you think it's way too late? "];
    const advice = ["We should buy a bar! ", "You can jump that far. ", "Don't bother, you can complete it..."];

    const newMessage = greetings[randomIndex(greetings.length)] + questions[randomIndex(questions.length)] + advice[randomIndex(advice.length)];

    console.log(newMessage);

}

function randomIndex(range){
    return Math.floor(Math.random()*range);
}

generateMessage();