//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */

var env = process.env;

module.exports = {  
  consumer_key: env.TWITTER_CONSUMER_KEY,  
  consumer_secret: env.TWITTER_CONSUMER_SECRET,
  access_token: env.TWITTER_ACCESS_TOKEN,  
  access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET 
}
