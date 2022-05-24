const express = require('express');
const app= express();
const port = process.env.PORT || 5000;

const routes = require('./api/routes');

routes(app);

app.listen(port,function() {
	console.log('Server strted on port:  ' + port);
});

// @Links for visit
// http://localhost:5000/radius/35004/10
// http://localhost:5000/radius/99501/5	

// http://localhost:5000/radius/85001/3
// http://localhost:5000/about
// http://localhost:5000


// OTHER EXAMPLES 
// Alaska	Juneau	99501 to 99950	
// Arizona	Phoenix	85001 to 86556

