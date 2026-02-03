const cards = [
  {
    question: "What is the “follow-the-sun” model in global teams?",
    answer: "It is a strategy where teams in different time zones work sequentially, allowing projects to progress almost 24 hours a day."
  },
  {
    question: "Why can silence in global meetings be misleading?",
    answer: "Because in some cultures silence signals respect or careful reflection, not disengagement or lack of ideas."
  },
  {
    question: "What builds trust faster in global virtual teams: tools or interaction patterns?",
    answer: "Interaction patterns. Regular and predictable communication rhythms build trust over time."
  },
  {
    question: "Why can language fluency distort perceptions of competence?",
    answer: "Because strong language skills may be mistaken for expertise, while valuable contributions from non-fluent speakers may be overlooked."
  },
  {
    question: "When should teams use video instead of email?",
    answer: "When issues are complex, ambiguous, emotional, or involve strategic decisions."
  },
  {
    question: "What is a communication rhythm in global teams?",
    answer: "A recurring cycle that alternates rich interactions (meetings, video) with lean communication (emails, shared documents)."
  },
  {
    question: "How do accents affect participation in global teams?",
    answer: "Accents can influence who is heard and trusted, even when ideas are equally strong."
  },
  {
    question: "Why can digital work increase emotional distance?",
    answer: "Because fewer informal interactions reduce opportunities for empathy, clarification, and relationship repair."
  },
  {
    question: "Where do many real decisions happen in global teams?",
    answer: "In informal spaces such as chats, document comments, and quick follow-up messages."
  },
  {
    question: "What is the leader’s main communication role in global teams?",
    answer: "To orchestrate channels, timing, and participation rather than control information."
  },
  {
    question: "Why is psychological safety critical in intercultural collaboration?",
    answer: "Because people share ideas and concerns more openly when they feel safe from embarrassment or loss of face."
  },
  {
    question: "Does diversity automatically improve team performance?",
    answer: "No. Diversity increases innovation only when communication norms and inclusion are intentionally managed."
  },
  {
    question: "Why can turning cameras on matter in high-stakes discussions?",
    answer: "Visual cues help interpret emotion, reduce misunderstanding, and strengthen trust."
  },
  {
    question: "Why is asking for clarification a strength in global teams?",
    answer: "Because it prevents misinterpretation and signals commitment to shared understanding."
  },
  {
    question: "Why is communication called the “infrastructure” of global organizations?",
    answer: "Because it shapes how coordination, trust, and culture are continuously built across distance."
  }
];

let current = 0;

function loadCard() {
  document.getElementById("question").innerText = cards[current].question;
  document.getElementById("answer").innerText = cards[current].answer;

  document.querySelector(".flashcard").classList.remove("flipped");
}

function flipCard() {
  document.querySelector(".flashcard").classList.toggle("flipped");
}

function nextCard() {
  current = (current + 1) % cards.length;
  loadCard();
}

loadCard();


