const gameConfig = [ //start game configuration
  //all options for prompt, choice, and options
  {
    choice: "Start",
    prompt: "Which of the following would best support your case?",
    options: ["Evidence to support the claim", "A compelling story about your own opinions", "The history of how scientists calculated the age of the Earth"]
  },
  {
    choice: "Evidence to support the claim",
    prompt: "Good! What evidence works best?",
    options: ["Fossils", "Radiometric Dating", "Both of these"]
  },
  {
    choice: "Fossils",
    prompt: "How can fossils tell us the age of the Earth?",
    options: ["Fossils can show how organisms evolved over time, which we understand takes a long time", "We can date the fossils and tell how old they are"]
  },
  {
    choice: "Fossils can show how organisms evolved over time, which we understand takes a long time",
    prompt: "True, but is that the best evidence?",
    options: ["It's good but we can also add in radiometric dating to help", "Yes"]
  },
  {
    choice: "We can date the fossils and tell how old they are",
    prompt: "That is true, but does the fossil record go all the way back to the beginning of the Earth?",
    options: ["No", "I think so"]
  },
  {
    choice: "No",
    prompt: "Right. So then what is the purpose of fossils then?",
    options: ["Fossils can show how organisms evolved over time, which we understand takes a long time"]
  },
  {
    choice: "I think so",
    prompt: "They don't, actually. They go back really far but not all the way. Let's restart.",
    options: ["Start"]
  },
  {
    choice: "It's good but we can also add in radiometric dating to help",
    prompt: "Good, now what is that?",
    options: ["It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay", "It is a way to date fossils and rocks"]
  },
  {
    choice: "Yes",
    prompt: "It's good evidence but doesn't really stand on its own. Let's restart.",
    options: ["Start"]
  },
  {
    choice: "It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay",
    prompt: "Oh okay. So we can figure out how long it takes things to break down and some things break down really slowly, even millions or billions of years. Is that it?",
    options: ["Exactly!"]
  },
  { //here is the final selection option
    choice: "Exactly!",
    prompt: "Congrats! You explained it so they understood! Now, go to Moodle and enter answer the secret word: 'Test of Time' into the Problem 1 Quiz. It might be best to copy and paste it so you don't have to worry about formatting.",
    options: ["Start"]
  },
  {
    choice: "Radiometric Dating",
    prompt: "Good, now what is that?",
    options: ["It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay", "It is a way to date fossils and rocks"]
  },
  {
    choice: "It is a way to date fossils and rocks",
    prompt: "How does it work?",
    options: ["It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay", "Magic!"]
  },
  {
    choice: "Magic!",
    prompt: "That's pretty funny, but not convincing. Try again.",
    options: ["It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay"]
  },
  {
    choice: "Both of these",
    prompt: "Good, so explain how they work in tandem.",
    options: ["Fossils can tell us about the somewhat more past using evolution and radiometric dating helps date fossils and rocks based on half-lives", "They each bring solve their own piece of the puzzle and don't work together, really"]
  },
  {
    choice: "Fossils can tell us about the somewhat more past using evolution and radiometric dating helps date fossils and rocks based on half-lives",
    prompt: "Oh, okay. So how does radiometric dating work?",
    options: ["It's based on the half-life of elements, which we can calculate to take certain amounts of time to decay", "Magic!"]
  },
  {
    choice: "They each bring solve their own piece of the puzzle and don't work together, really",
    prompt: "They do work to help with separate parts of the puzzle, but they do work in tandem. So how does that work?",
    options: ["Fossils can tell us about the somewhat more past using evolution and radiometric dating helps date fossils and rocks based on half-lives"]
  },
  {
    choice: "A compelling story about your own opinions",
    prompt: "Hmm. Not sure this would work the best, but you can try. They say they're interested in your opinions, but what are they based on?",
    options: ["Data and evidence", "What you've heard", "Your own personal beliefs"]
  },
  {
    choice: "Data and evidence",
    prompt: "Good! What evidence works best?",
    options: ["Fossils", "Radiometric Dating", "Both of these"]
  },
  {
    choice: "What you've heard",
    prompt: "What have you heard?",
    options: ["That data and evidence are best", "Ideas from people who have their own beliefs"]
  },
  {
    choice: "That data and evidence are best",
    prompt: "Good! What evidence works best?",
    options: ["Fossils", "Radiometric Dating", "Both of these"]
  },
  {
    choice: "Ideas from people who have their own beliefs",
    prompt: "Hmm. Not really interested in beliefs. They want a solid explanation they can understand, something more scientific. Let's try again.",
    options: ["Start"]
  },
  {
    choice: "The history of how scientists calculated the age of the Earth",
    prompt: "This might work. Where do you start?",
    options: ["The ideas of different ancient civilizations", "Hutton and Lyell", "John Perry"]
  },
  {
    choice: "The ideas of different ancient civilizations",
    prompt: "This is a bit too far back. What might be a better option?",
    options: ["Hutton and Lyell", "John Perry"]
  },
  {
    choice: "Hutton and Lyell",
    prompt: "Okay. What kind of ideas did they propose?",
    options: ["Uniformitarianism - the slow geological processes today are the same ones that have always worked, so the Earth must be old", "I don't remember, but I know they were Scottish"]
  },
  {
    choice: "Uniformitarianism - the slow geological processes today are the same ones that have always worked, so the Earth must be old",
    prompt: "That makes sense. What other evidence might help?",
    options: ["Fossils", "Radiometric Dating", "Both of these"]
  },
  {
    choice: "I don't remember, but I know they were Scottish",
    prompt: "That IS interesting, but what did they propose?",
    options: ["Uniformitarianism - the slow geological processes today are the same ones that have always worked, so the Earth must be old"]
  },
   {
    choice: "John Perry",
    prompt: "This might be a bit late in the game, but what did he discover?",
    options: ["Radiometric Dating"]
  }  
];

const prompt = document.querySelector(".prompt"); //define prompt through querySelector
const chooser = document.querySelector(".chooser"); //define choices through querySelector
const actBtn = document.querySelector(".act-btn"); //define actions through querySelector

function act(choice) { //function for act
  prompt.textContent = gameConfig.filter( //set up prompt based on choice
    config => config.choice === choice
  )[0].prompt;
  chooser.innerHTML = gameConfig //set up innerHMTL to navigate around choices, which defines options
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join(""); //put it all together
}

actBtn.addEventListener("click", () => act(chooser.value)); //add a listener

act("Start"); //defines starting point as first option, which contains "Start" as the choice
