var userModel = require ("./user-model.js");

exports.registerUser =(req, res. next)=>{
	var user = req.body;

	var userObj = new userModel(user);

	userObj.save().then(function(data){
		if(!data) {return next(new Error("User did not fill in any data"));}
			
	})
}
