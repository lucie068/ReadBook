var mongoose = require("mongoose");
var StudentSchema;

//mongoose.connect("mongodb://localhost/student");
mongoose.connect("mongodb://student:Lucy@1234.mlab.com:35619/student");
StudentSchema = new mongoose.Schema({
	name: {type: String, required: true},
	role:{type: String, required: true},
	date:{tyep: Date, default: Date.now}

});
module.exports = mongoose.model("pupil,studentSchema");
