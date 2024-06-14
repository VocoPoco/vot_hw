import express from 'express';
import session from 'express-session';
import passport from './auth/auth';
import { config } from './config/config';
import mongoose from "mongoose";

const app = express();
const port = config.port;

mongoose.connect(config.db.uri, {
    dbName: 'db',
    autoIndex: true,
    autoCreate: true
} as mongoose.ConnectOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(session({
    secret: 'random_ass_secret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('API Running!');
});

app.get('/callback', passport.authenticate('auth0', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/user');
});

export default app;
