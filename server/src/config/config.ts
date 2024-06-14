import dotenv from "dotenv"

dotenv.config();

export const config = {
    port: process.env.SERVER_PORT || 3000,
    jwt_secret: process.env.JWT_SECRET || '',
    oidc: {
        client_id: process.env.OIDC_CLIENT_ID || '',
        client_secret: process.env.OIDC_CLIENT_SECRET || '',
        domain: process.env.OIDC_DOMAIN || '',
        auth_callback_uri: process.env.AUTH_CALLBACK_URI || 'http://localhost:3000/callback'
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/db'
    }
}
