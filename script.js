const challengePool = [
  "Přijmi 3 minuty na městě a vyhraj 3 souboje s neznámými hráči.",
  "Vytvoř si vlastní styl vozidla a navrhni mu jméno, barvu i výbavu.",
  "Dokonči jednu vypínající misi v režimu pro 2 hráče a získej bonusový úkol.",
  "Vyber si z města 5 míst a vytvoř z nich trasu pro krátký noční průzkum.",
  "Založ si nový klub nebo podnik a doplň ho o tematický vzhled.",
  "Vyzkoušej si ve hře nový styl hraní: bez boje, jen s přepadeními a závody.",
  "Najdi zcela nejdražší auto, které můžeš v městě momentálně koupit.",
  "Zahraj si 30 minut bez zbraní a zkus si projít město pouze na nohou či na kole.",
  "Vytvoř si skupinu přátel a realizuj společnou akci, která bude mít vlastní název."
];

const rewardPool = [
  "Zlatý bonus za styl",
  "Speciální vzhled vozidla",
  "Extra peníze do banky",
  "Vysoce oceněná roleplay mise",
  "Místo pro nový podnik",
  "Čistý průchod městem bez zbytečné námahy"
];

const challengeText = document.getElementById("challenge-text");
const rewardText = document.getElementById("reward-text");

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateChallenge() {
  challengeText.textContent = getRandomItem(challengePool);
  rewardText.textContent = getRandomItem(rewardPool);
}

document.getElementById("generate-button").addEventListener("click", generateChallenge);

generateChallenge();
