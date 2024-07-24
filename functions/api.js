const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const router = express.Router();

const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!"
    },
    {
      id: 2,
      title: "What do you get when you cross a snowman and a vampire?",
      content: "Frostbite."
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!"
    },
    {
      id: 4,
      title: "Why don't some couples go to the gym?",
      content: "Because some relationships don't work out."
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!"
    }
];

app.use(cors());

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.get('/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.json(randomJoke);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);