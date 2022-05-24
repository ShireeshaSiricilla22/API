const express = require('express');
const app= express();
const port = process.env.PORT || 5000;

const routes = require('./api/routes');

routes(app);

app.listen(port,function() {
	console.log('Server strted on port:  ' + port);
});

// @Links for visit
// http://localhost:5000/match-close/35004,36925,86556/300
// http://localhost:5000/about
// http://localhost:5000


// OTHER EXAMPLES 
// Alaska	Juneau	99501 to 99950	
// Arizona	Phoenix	85001 to 86556

