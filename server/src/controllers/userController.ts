import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/user';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { oidcSub, oidcProvider, username, email } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ oidcSub, oidcProvider, username, email });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ message: 'Not authenticated' });
        }

        const { email, oidcSub } = req.body;
        const user = await User.findOne({ email, oidcSub });
        if (!user) {
            return res.status(400).json({ msg: `Invalid crendntials: ${email}, ${oidcSub}` })
        }

        res.status(200).json({ msg: `User ${req.user} logged in succesfully` });
    } catch (error) {
        next(error);
    }
};
