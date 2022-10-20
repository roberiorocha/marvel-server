import express, { json } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { stringify } from "querystring";

import { fetchApi } from "./api"; 
import { userAlreadyExistes } from "./auth";
import { readDBAsync } from "./DB/db";
import { writeDBAsync } from "./DB/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/characters', async (req, res) => {
  try {
      const response = await fetchApi("/characters");
      const data =await response.json();
      console.log(data);
      res.json({
        test: data
      })
  }catch(err){
    console.log(err)

  }
});

app.post("/auth/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    const userExists = await userAlreadyExistes({ email });

   if (userExists) {
    throw "Usuário já existe!";
   }

   const db = await readDBAsync();
   const lastAddedUser = db.users[db.users.length = -1];
   const id = lastAddedUser ? lastAddedUser.id + 1 : 0;

   const user = {
    id,
    email
   };

   db.user.push(user);
   await writeDBAsync(db);

  } catch (err) {

  }
});

app.post('/characters', async (req, res) => {
  res.json({
    test: "a"
  })
});



export default app;