(function(){
  // Short list of movie quotes (<= 90 chars each)
  const quotes = [
    "May the Force be with you.",
    "I'll be back.",
    "Here's looking at you, kid.",
    "You talking to me?",
    "May the odds be ever in your favor.",
    "You're gonna need a bigger boat.",
    "Why so serious?",
    "I'm the king of the world!",
    "Frankly, my dear, I don't give a damn.",
    "Houston, we have a problem.",
    "Nobody puts Baby in a corner.",
    "I'm gonna make him an offer he can't refuse.",
    "Keep your friends close, but your enemies closer.",
    "Life is like a box of chocolates.",
    "To infinity and beyond!"
  ];

  function setRandomQuote() {
    const el = document.getElementById('home-quote');
    if (!el) return;
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    el.textContent = q;
  }

  // Set initial quote immediately, then every 60 seconds
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){
      setRandomQuote();
      setInterval(setRandomQuote, 60 * 1000);
    });
  } else {
    setRandomQuote();
    setInterval(setRandomQuote, 60 * 1000);
  }
})();
