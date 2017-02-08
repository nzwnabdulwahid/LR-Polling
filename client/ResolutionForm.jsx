import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

	addResolution(event){
		event.preventDefault();
		var resolution = this.refs.resolution.value.trim(); 

		Meteor.call('addResolutions', resolution, ()=> {
			this.refs.resolution.value = "";
		});

		
		
	}

	render() {
		return  (
			<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input type="text" ref="resolution" placeholder="New Resolution Here" />
				
			</form>
		)
	}
}