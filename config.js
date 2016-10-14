var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
config.webhost = 'https://urlshortener-eladkeyshawn.c9users.io';

// your MongoDB host and database name
config.db.host = 'eladkeyshawn-urlshortener-3897339';
config.db.name = 'url_shortener';

module.exports = config;