const qouteButton = document.getElementById("getQoutes");

const h1Element = document.getElementById("title");

const pElement = document.getElementById("author");

const qoutes = [
  {
    title:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    title:
      "The first step to life is to try. The second is to learn. The third is to share.",
    author: "Maxime Lagacé",
  },
  {
    title: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    title: "The mind is everything. What you think you become. ",
    author: "Buddha",
  },
  {
    title: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  { title: "The unexamined life is not worth living. ", author: "Socrates" },

  {
    title: "Keep looking up… that’s the secret of life.",
    author: "Snoopy",
  },

  {
    title:
      "Don’t search for the meaning of life. Simply be present for the people you love. ",
    author: "Maxime Lagacé",
  },
  {
    title: "The heart, like the stomach, wants a varied diet.",
    author: "Gustave Flaubert",
  },

  {
    title:
      "Your goal in life is to find out the people who need you the most, to find out the business that needs you the most, to find the project and the art that needs you the most. There is something out there just for you.",
    author: "Naval Ravikant",
  },

  {
    title:
      "I tell you, in this world being a little crazy helps to keep you sane.",
    author: "Zsa Zsa Gabor",
  },
  {
    title:
      "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things.",
    author: "Kenneth Branagh",
  },

  {
    title: "The trick in life is learning how to deal with it.",
    author: "Helen Mirren",
  },

  {
    title: "In the middle of a difficulty lies opportunity.",
    author: "Albert Einstein",
  },

  {
    title:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },

  {
    title:
      "The first step to life is to try. The second is to learn. The third is to share.",
    author: "Maxime Lagacé",
  },

  {
    title: "The unexamined life is not worth living.",
    author: " Socrates",
  },

  {
    title:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ",
    author: "Steve Jobs",
  },

  {
    title: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },

  {
    title: "You only live once, but if you do it right, once is enough. ",
    author: "Mae West",
  },
];
h1Element.textContent = qoutes[0].title;
pElement.textContent = qoutes[0].author;

qouteButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * qoutes.length);

  h1Element.textContent = qoutes[randomNumber].title;
  pElement.textContent = qoutes[randomNumber].author;
});
