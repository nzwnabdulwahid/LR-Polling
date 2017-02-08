import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionForm from './ResolutionForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

import PostForm from './PostForm.jsx';



Resolutions = new Mongo.Collection("resolutions"); 
Posts = new Mongo.Collection("posts");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor(){
		super();

		this.state = {
			subscription: {
				resolutions: Meteor.subscribe('userResolutions'),
				blogPost: Meteor.subscribe('allBlogPost')
				
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.resolutions.stop();
	}

	resolutions(){
		return Resolutions.find().fetch();
	}	

	blogPost(){
		return Posts.find().fetch();
	}

	
	render () {
		
		
		return (
			<div>
				<h1>Blog Posts</h1>	
				<PostForm/>			
				

				
				
				
			</div>
		)
	}
}

