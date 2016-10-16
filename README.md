# shorty
my url shortener

### install mongodb & and modules
```
sudo apt-get install mongodb-org 
npm install express body-parser mongoose path --save
```

### for using c9.com -> change config file accordingly:
```
var config = {};

config.db = {};

config.webhost = 'https://url-shortener-eladk.c9users.io/';

config.db.host = 'eladk-url_shortener-3902741';
config.db.name = 'url_shortener';

module.exports = config;
```

### running our db server:
```
mkdir data
cd data
mongod --nojournal --dbpath=data // --nojournal required only for c9.com due to limited memory
```

### initializing our db:
```
use shorty
db.counters.insert({_id: 'url_count', val: 1});
```



### connecting to our db in code:
```
mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);
```

### running server:
```
node server.js
```

