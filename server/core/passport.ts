import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';

import { User } from '../../models';

passport.use(
  'github',
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/github/callback',
    },

    async (accessToken, refreshToken, profile, cb) => {
      const obj = {
        fullname: profile.displayName,
        avatarUrl: profile.photos?.[0].value,
        isActive: 0,
        username: profile.username,
        phone: '',
      };

      const user = await User.create(obj);
      cb(user);
    },
  ),
);

export { passport };
