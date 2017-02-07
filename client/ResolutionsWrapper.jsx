import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionForm from './ResolutionForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';


Resolutions = new Mongo.Collection("resolutions"); 

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor(){
		super();

		this.state = {
			subscription: {
				resolutions: Meteor.subscribe('allResolutions')
			}
		}
	}

	componentWillUnmount(){
		this.state.subscription.resolutions.stop();
	}

	resolutions(){
		return Resolutions.find().fetch();
	}	

	
	render () {
		
		// if(res.length < 1){
		// 	return (
		// 		<div> Loading... </div>
		// 	)
		// }
		return (
			<div>
				<h1>My Resolution</h1>	
				<ResolutionForm/>			
				<ul className = "resolutions">
				{	this.resolutions().map( (resolution) => {
						return <ResolutionSingle key={resolution._id} resolution={resolution}/>
				})}					
				
				</ul>

				
				
				
			</div>
		)
	}
}

