import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });

import express from 'express';

import { passport } from './core/passport';
import './core/db';

const app = express();

const PORT = 3001;

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.send();
  },
);

app.listen(PORT, () => {
  console.log('SERVER RUNNED!');
});
