import express from 'express';
import session from 'express-session';
import passport from './auth/auth';
import { config } from './config/config';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

mongoose.connect(config.db.uri, {
    dbName: 'db',
    autoIndex: true,
    autoCreate: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
} as mongoose.ConnectOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());

app.use(session({
    secret: 'random_ass_secret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API Running!');
});

app.listen(config.port, config.hostname, () => {
    console.log(`Server is running on http://${config.hostname}:${config.port}`);
});

export default app;
