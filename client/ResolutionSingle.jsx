import React, {Component} from 'react';

export default class ResolutionSingle extends Component {

	toggleChecked(){
		Meteor.call('toggleResolution', this.props.resolution);
	}

	deleteResolution(){
		Meteor.call('deleteResolution', this.props.resolution);
	}

	render() {
		const resolutionClass = this.props.resolution.complete ? "checked" : "";

		return (
			<li className={resolutionClass}>
			<input type="checkbox" readOnly={true} checked={this.props.resolution.complete} onClick = {this.toggleChecked.bind(this)}/>
			{this.props.resolution.text} 
			<button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>
				&times;
			</button>
			</li>
		)
	}
}