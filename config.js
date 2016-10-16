var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
config.webhost = 'https://url-shortener-eladk.c9users.io/';

// your MongoDB host and database name
config.db.host = 'eladk-url_shortener-3902741';
config.db.name = 'url_shortener';

module.exports = config;