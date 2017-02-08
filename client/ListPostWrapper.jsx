import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import PostSingle from './PostSingle.jsx';

export default class ListPostWrapper extends TrackerReact(React.Component) {

	constructor(){
		super();

		this.state = {
			subscription: {
				blogPost: Meteor.subscribe('allBlogPost')
				
			}
		}
	}

	
	blogPost(){
		return Posts.find().fetch();
	}

	
	render () {
		
		
		return (
			<div>
				<h1>Blog Posts List</h1>						
				<ul className = "resolutions">
				{	this.blogPost().map( (blogpost) => {
						return <PostSingle key={blogpost._id} blogpost={blogpost}/>
				})}					
				
				</ul>				
				
			</div>
		)
	}
}
