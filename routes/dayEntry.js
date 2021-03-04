/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
	console.log(data);
	var plantToShow = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

	var ind = -1;


	for (var i = 0; i < data[plantToShow].length; i++) {
		if (data[plantToShow][i].date == dateToShow) {
			ind = i;
		}
	}

	var forSlides = [];
	var forText = "";
	var forMood = "";

	if (ind != -1) {
		forSlides = data[plantToShow][ind].slides;
		forText = data[plantToShow][ind].text;
		forMood = data[plantToShow][ind].status;
	}

	res.render('dayEntry', {
		"plant": plantToShow,
		"date": dateToShow,
		"status": forMood,
		"slides": forSlides,
		"text": forText
	});
};