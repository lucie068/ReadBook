var expressjwt = require("express-jwt");
var jwt = require("jswontoken");
var userModel = require("user-model.js");
var checkToken = express({secret: "jswonweb"});

exports.decodeToken =(req, res, next)=>{
	checkToken(req, res, next);
	console.log(req, user);
}
exports.verifyUser =(req, res, next)=>{
	var username= req.body.username;
	var password = req.body.password;

	if (!username|| !password){
		return next(new Error("Please enter username and/or password"));
	}
	userModel.findOne({username: username}).then ( function(user) {
		if(!user){
			return next(newError("username and/or password incorrect"));

		}
		if(!user.authenciate(password)){
			return next(new Error("username and/or password incorect"));
		}
	req.user = user;
	next();
}, (err)=>{
	ext(err);
});

}
