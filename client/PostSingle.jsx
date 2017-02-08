import React, {Component} from 'react';

export default class PostSingle extends Component {

	render(){
		return (
			
			<div>
				<li>					
					<h3>{this.props.blogpost.title}</h3>
					<p>{this.props.blogpost.content}</p>
				</li>
			</div>

		)
	}

}