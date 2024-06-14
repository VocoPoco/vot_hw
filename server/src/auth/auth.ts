import passport from 'passport';
import { Strategy as Auth0Strategy } from 'passport-auth0';
import { config } from '../config/config';

passport.use(new Auth0Strategy({
    domain: config.oidc.domain,
    clientID: config.oidc.client_id,
    clientSecret: config.oidc.client_secret,
    callbackURL: config.oidc.auth_callback_uri
}, (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user as Express.User);
});

export default passport;
