/*
 * GET home page.
 */
var myPlantsData = require("../myPlantsData.json")

	var startDate = new Date(myPlantsData.startDate);
	var dateCurr = new Date();

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

exports.view = function(req, res){
  res.render('myPlantsPage', {
  		"pic": myPlantsData.pic,
  		"nickname": myPlantsData.nickname,
		"species": myPlantsData.species,
<<<<<<< HEAD
		"age": myPlantsData.age,
		"Plants": myPlantsData.Plants,
		"autoAge": ageDays,
		"watering": myPlantsData.watering,
=======
		"watering": myPlantsData.watering,
		"Plants": myPlantsData.Plants,
		"autoAge": ageDays,
>>>>>>> dbaddde9bc695fca210e1ae9067459bebde20fe5
  });
};





