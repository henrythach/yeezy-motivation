var QUOTES = [
  "I see stuff from the future, and I'm such a futurist that I have to slow down and talk in the present.",
  "My greatest pain in life is that I will never be able to see myself perform live.",
  "A lot of people were wondering what I was gonna do if I didn't win anything. I guess we'll never know.",
  "I feel like I'm too busy writing history to read it.",
  "You can't look at a glass half full or empty if it's overflowing.",
  "My greatest award is what I'm about to do.",
  "Nobody can tell me where I can and can't go.",
  "I am so credible and so influential and so relevent that I will change things.",
  "Criticism can bother you, but you should be more bothered if there's no criticism.  That means you're too safe.",
  "I'm a creative genius and there's no other way to word it.",
  "People say I have a bad reputation.  I think I've got the best reputation in the building.",
  "50 is Eminem's favorite rapper... I'm my favorite rapper.",
  "For me giving up is way harder than trying.",
  "Believe in your flyness... conquer your shyness.",
  "Success is the best revenge.",
  "Come on now! How could you be me and want to be someone else?",
  "If you're a Kanye West fan, you're not a fan of me. You're a fan of yourself.",
  "It's about whatever I want to make it about. It's my world."
];
document.getElementById('quote').innerHTML = QUOTES[Math.floor(Math.random() * QUOTES.length)];
