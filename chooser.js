const gameConfig = [
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
    choice: "A compelling story about your own opinions",
    prompt: "The dragon breathes fire!",
    options: ["Duck", "Jump"]
  },
  {
    choice: "The history of how scientists calculated the age of the Earth",
    prompt: "This might work. Where do you start?",
    options: ["The ideas of different ancient civilizations", "Hutton and Lyell", "John Perry"]
  }
];

const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");

function act(choice) {
  prompt.textContent = gameConfig.filter(
    config => config.choice === choice
  )[0].prompt;
  chooser.innerHTML = gameConfig
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join("");
}

actBtn.addEventListener("click", () => act(chooser.value));

act("Start");
