Meteor.methods({
	addResolutions(resolution){
		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt : new Date()
		});
	}
});