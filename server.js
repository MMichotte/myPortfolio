//Install express server
const express = require('express');
const helmet = require("helmet");
const path = require('path');

const app = express();

app.use(helmet());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/myPortfolio'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/myPortfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
