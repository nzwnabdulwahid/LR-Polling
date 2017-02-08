import { Meteor } from 'meteor/meteor';

Resolutions = new Mongo.Collection("resolutions");
Posts = new Mongo.Collection("posts");

Meteor.publish("allBlogPost", function(){
	return Posts.find();
});

Meteor.publish("allResolutions", function(){
	return Resolutions.find();
});

Meteor.publish("userResolutions", function(){
	return Resolutions.find({
		user: this.userId
	});
});
