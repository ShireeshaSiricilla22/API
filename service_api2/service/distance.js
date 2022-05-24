var request = require('request');
const apiKey ="DemoOnly00KjSeAgPqBMuYp6wANKKFdJLUggBRUOux8zr8GizQGFA9daPc4CwS30";
const zipcodeURL = 'https://www.zipcodeapi.com/rest/';

// THIS IS DISTANCE FUNCTION FROM API
// change @miles parameter to @km for converstion 
var distance = {
	find: function(req,res, next) {
		request(zipcodeURL + apiKey + "/radius.json/" + req.params.pincode1 + "/" + req.params.distance1 + "/km",
		function(error, response, body) {
			if(!error && response.statusCode == 200) {
				response = JSON.parse(body);
				res.send(response);
			} else {
				console.log(response.statusCode + response.body);
				res.send({distance: -1});
			}
		});
	}
};

module.exports = distance;

				
				
		