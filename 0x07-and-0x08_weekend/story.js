
function generateStory(){
    // variable declarations
    let name = prompt("Enter protagonist's name: ");
    let age = parseInt(prompt("Enter protagonist's age: "));
    let gender = prompt("Are they male or female? ");
    let storyName = prompt("What will the name of your story be? ");
    let setting = prompt("Enter the location in which your story takes place: ");
    let hasPet = confirm("Does the protagonist in your story have a pet? ");
    
    // an if statement to verify if protagonist has a pet or not
    if (hasPet === true){
        var petType = prompt("Enter type of pet: ");
        var pet = prompt("Enter pet name: ");
    }

    let antagonist = prompt("What is the name of this story's antagonist? ");
    let duration = prompt("How many years does the story span over? Write in words ");
    let quest = prompt("What is the name of the quest your protagonist has been tasked with? ");
    let weapon = prompt("And finally enter the name of the weapon your protagonist uses: ");
    
    // main story
    let story = `In the mystical land of ${setting}, young ${name}, aged ${age}, embarked on an enchanting adventure called ${quest}. With ${pet}, a loyal pet ${petType}, ${pet} and ${name} faced the fearsome Ice Serpent, ${antagonist} for over ${duration} treacherous years. Armed with the magical ${weapon}, ${name} emerged triumphant, saving ${setting} from eternal doom.`;
    
    // alternate story
    let alternateStory = `In the desolate land of ${setting}, an old warrior named ${name}, aged ${age}, embarked on a lonesome adventure called ${quest}. With ${pet}, a loyal companion which was a ${petType}, ${pet} and ${name} faced the fearsome Dragon Dogma of Legend, ${antagonist} for over ${duration} painful years. Armed with a battered old ${weapon}, ${name} eventually emerged triumphant, saving ${setting} from eternal doom.`;
    
    // an if statement to generate a different story depending on protagonist age
    if (age >= 30){
        let result = alert(alternateStory);
        return result;
    } else{
    let result = alert(story);
    return result;
    }
}
generateStory();
