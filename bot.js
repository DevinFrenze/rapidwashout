var Twit = require('twit');
var config = require('./config.js');

var twitter = new Twit(config);
var stream = twitter.stream('statuses/filter', { track: 'lightening fast' });

stream.on('tweet', function(tweet) {

  var regex1 = /lightening[-\s]fast/gi;
  var regex2 = /fast[\s]as[\s]lightening/gi;
  var matches = tweet.text.match(regex1) || tweet.text.match(regex2);

  if (matches && matches.length) {
    var match = matches[0].replace(/e/i, '');

    var params = {
      status: `@${tweet.user.screen_name} I think you mean "${match}"`,
      in_reply_to_status_id: tweet.id_str,
    };

    twitter.post('statuses/update', params, function(err, response){
      console.log(`response ${err ? 'failed' : ('successful id ' + response.id)}`);
    });
  }
});
