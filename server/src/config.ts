import dotenv from "dotenv"

dotenv.config();

export const config = {
    port: process.env.SERVER_PORT || 3000,
    jwt_secret: process.env.JWT_SECRET,
    oidc: {
        issuer: process.env.OIDC_ISSUER,
        client_id: process.env.OIDC_CLIENT_ID,
        client_secret: process.env.OIDC_CLIENT_SECRET,
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'database',
    },
}
