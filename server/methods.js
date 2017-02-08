Meteor.methods({

	addResolutions(resolution){
		if(!Meteor.userId()){
			throw new Meteor.Error('not-logged-in');
		}
		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt : new Date(),
			user: Meteor.userId()
		});
	},

	toggleResolution(resolution){
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error('not-logged-in');
		}
		Resolutions.update(resolution._id, {
			$set: {
				complete: !resolution.complete
			}
		});
	},

	deleteResolution(resolution){
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error('not-logged-in');
		}
		Resolutions.remove(resolution._id);
	}


});