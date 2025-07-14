const quotes = [
  "Your journey is your power. Keep moving forward!",
  "Code today, create tomorrow.",
  "Dream big. Start small. Act now.",
  "Consistency beats talent when talent doesn’t work hard.",
  "You’re not behind — you’re just getting started!"
];

const colors = [
  "#FFEEAD", "#E0BBE4", "#5be7c9ff", "#FADBD8", "#A9CCE3", "#D5F5E3"
];

const btn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");
const card = document.getElementById("profileCard");

btn.addEventListener("click", () => {
  // Random quote
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = quote;

  // Random background color
  const color = colors[Math.floor(Math.random() * colors.length)];
  card.style.backgroundColor = color;
});
