exports.view = function(req, res){
	var addedSpecies = req.params.species;
  res.render('editPlantPage', {
  	"species": addedSpecies
  });
};

