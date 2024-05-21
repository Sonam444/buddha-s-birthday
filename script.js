// Change the quote displayed on the card
function changeQuote() {
  const quotes = [
    "“All that we are is the result of what we have thought.”",
    "“The mind is everything. What you think you become.”",
    "“Peace comes from within. Do not seek it without.”",
    "“You will not be punished for your anger, you will be punished by your anger.”",
    "“Three things cannot be long hidden: the sun, the moon, and the truth.”"
  ];
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Change the background color of the body
function changeBackground() {
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccffff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Change the font of the body
function changeFont() {
  const fonts = ["Arial, sans-serif", "Georgia, serif", "Verdana, sans-serif"];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  document.body.style.fontFamily = randomFont;
}
