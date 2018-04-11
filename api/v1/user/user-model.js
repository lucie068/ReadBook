var mongosse =require("mongoose");
var UserSchema;
mongoose.connect("mongodb://localhost/student");

UserSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password:{type: String; required: true, unique: true}
});


module.exports = mongoose.model("user, UserSchema");