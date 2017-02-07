import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

	resolutions(){
		return Resolutions.find().fetch();
	}

	addResolution(event){
		event.preventDefault();
		var resolution = this.refs.resolution.value.trim(); 

		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt : new Date()
		});

		this.refs.resolution.value = "";
		
	}

	render () {
		let res = this.resolutions();
		if(res.length < 1){
			return (
				<div> Loading... </div>
			)
		}
		return (
			<div>
				<h1>My Resolution</h1>
				<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
					<input type="text" ref="resolution" placeholder="New Resolution Here" />

				</form>
				<div>
					{res[0].text}
				</div>
			</div>
		)
	}
}

