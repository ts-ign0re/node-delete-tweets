const Twit = require('twit');
import Twit from 'twit';
import config from './config';

const T = new Twit({
  consumer_key: config.apiKey,
  consumer_secret: config.apiSecretKey,
  access_token: config.accessToken,
  access_token_secret: config.accessTokenSecret
});

export default T;
