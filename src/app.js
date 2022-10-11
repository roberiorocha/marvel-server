import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { stringify } from "querystring";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const characters = [
  {
    id: 1,
    name: "Personagem 1"
  },
  {
    id: 2,
    name: "Personagem 2"
  },
  {
    id: 3,
    name: "Personagem 3"
  }
]

app.get('/', (req, res) => {
  res.json({
    test: "a"
  })
})

app.get('/characters', (req, res) => {
  res.json({
    characters
  })
})

app.post('/characters', (req, res) => {
  console.log(req.body);
  res.json({
    test: "a"
  })
})

app.get('/characters/:id', async(req, res) => {
  const {id} = req.params;
  console.log("id", id);
  res.json({
    characters: characters.filter((character) => String(character.id) === String(id))
  })
})

export default app;