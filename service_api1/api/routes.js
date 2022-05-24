'use strict';
const  controller =require('./controller');


// FUNCTION TO MAKE DIFFERENT ROUTER CALL ---> @CONTROLLER DEFINE THE CALL
module.exports = function(app) {
	app.route('/about').get(controller.about);
	app.route('/distance/:pincode1/:pincode2').get(controller.getDistance);
	app.get('/', (req, res)=>{
		res.send(" This is API HOME.")
	})
	
};

