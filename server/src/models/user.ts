import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    oidcSub: string;
    oidcProvider: string;
    username: string;
    email: string;
}

const userSchema: Schema = new Schema({
    oidcSub: { type: String, required: true, unique: true },
    oidcProvider: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
})

export default mongoose.model<IUser>('User', userSchema);