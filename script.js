const cards = [
  { question: "O que é comunicação intercultural?", answer: "Interação entre pessoas de culturas diferentes." },
  { question: "O que significa ICC?", answer: "Intercultural Communicative Competence." },
  { question: "Para que servem flashcards?", answer: "Ajudam na memorização ativa." }
];

let current = 0;

function loadCard() {
  document.getElementById("question").innerText = cards[current].question;
  document.getElementById("answer").innerText = cards[current].answer;
  document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
  current = (current + 1) % cards.length;
  loadCard();
}

loadCard();
