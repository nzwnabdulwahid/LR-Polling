import React, {Component} from 'react';

export default class PostForm extends Component {

	
	addNewPost(event){
		event.preventDefault();
		var title = this.refs.title.value.trim();
		var post = this.refs.newpost.value.trim();

		Meteor.call('addPost', title, post, ()=> {
			this.refs.newpost.value = '';
			this.refs.title.value='';
		});

	}

	render(){
		return (
			<div>
				<form action="" className="newPost" onSubmit={this.addNewPost.bind(this)}>
					<input type="text" name="title" ref="title" id=""/>
					<textarea name="newpost" ref="newpost" id="" cols="30" rows="10"></textarea>
					<input type="submit" value="Add new Post"/>
				</form>
			</div>
		)
	}

}