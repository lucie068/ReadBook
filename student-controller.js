var studentModel = require("student-model.js");

exports.interceptIDs = (req, res, next)=>{
	student-Model.findById(id)
	.then((data)) =>{
	if(data) {return next(new Error("We cannot find the student in our data"));}
	req.student = data;
	next();
}, (err) => {return next(err);

})
}
exports.featchAllStudents = (req, res, next) =>{
	studentModel.find((err, data)) =>{
		if (err) {return next(new Error ("We cannot find the student"));}
			res.status(200).json(data)

	})
};
exports.addStudent =(req, res, next)=>{
	var student = req.body;
	var pupil = new studentModel(student);
	pupil.save((err,data) =>{
		if (err) {return next(new Error("failed to add new user"))}
	res.status(200).json(data);
	})

exports.fetachStudentById = (req, res, next)=>{
	if(!req.student) { return next(new Error("student not found in database"));}
res.status(200).json(req.student);
}
exports.deleteStudentById =(req, res) =>{
	var id = req.params.id;

	studentModel.findIdAndRemove(id).then((data)=>{
		if(!data) {return next(new Error("Could not delete student data"));}

		res.status(200).json(data);
	}, (err) =>
	next(err);
});
}
exports.updateStudent =(req, res) =>{
	var id = req.params.id
	var student = req.body;

	studentModel.findIdAndUpdate(id,student).then((data)=>{
		if(!data) {return next(new Error("could not update student record"));}

		res.status(200).json(data)
	}, (err) =>{
		next(err);
	})
}
