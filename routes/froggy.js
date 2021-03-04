var myPlantsData = require('../myPlantsData.json');

exports.view = function(req, res){
	var viewPlant = req.params.plantName;
	var ind = -1;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";
	//this may be unneccesary if default image is added when updating json

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			ind = i;
			break;
		}
	}

	//this default safeguard may be unneccesary if default image is added when updating json
	if (ind != -1) {
		accessPic = myPlantsData["Plants"][ind]["pic"];
		accessSpecies = myPlantsData["Plants"][ind]["species"];
	}

	//calculating age
	var startDate = new Date(myPlantsData["Plants"][ind]["start"]);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

  res.render('froggy', {
  	"nickname": viewPlant,
  	"pic": accessPic,
  	"species": accessSpecies,
  	"age": ageDays
  });
};

var data = require("../data.json");

exports.addEntry = function(req, res) {    
	// Your code goes here
	var viewPlant = req.params.plantName;

	var inputDate = req.query.date;
	var month = inputDate.substring(5, 7);
	var day = inputDate.substring(8);
	var year = inputDate.substring(0, 4);
	var date = month + "/" + day + "/" + year;

	var exists = false;
	var ind = -1;

	for (var i = 0; i < data[viewPlant].length; i++) {
		if (data[viewPlant][i].date == date) {
			exists = true;
			ind = i;
		}
	}

	//update existing entry
	if (exists) {
		data[viewPlant][ind].text = req.query.description;
		data[viewPlant][ind].status = req.query.buttonGroup;
		/*
		if (req.query.img != null) {
			data[viewPlant][ind].slides.push(req.query.img);
		}
		*/
	}
	else { //create new entry to be added
		var picArr = [];
		//picArr.push(req.query.img); //input photo not functional rn
		newEntry = {
		"date": date,
		"text": req.query.description,
		"status": req.query.buttonGroup,
		"slides": picArr
		};
		data[viewPlant].push(newEntry);
	}


	var index = -1;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";
	//this may be unneccesary if default image is added when updating json

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			index = i;
			break;
		}
	}

	//this default safeguard may be unneccesary if default image is added when updating json
	if (index != -1) {
		accessPic = myPlantsData["Plants"][index]["pic"];
		accessSpecies = myPlantsData["Plants"][index]["species"];
	}

	//calculating age
	var startDate = new Date(myPlantsData["Plants"][index]["start"]);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

	res.render('froggy', {
		"nickname": viewPlant,
  		"pic": accessPic,
  		"species": accessSpecies,
  		"age": ageDays
	});
 }
