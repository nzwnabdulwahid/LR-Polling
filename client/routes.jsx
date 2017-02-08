import React from "react";
import {mount} from "react-mounter";

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './ResolutionsWrapper.jsx';
import AboutPageWrapper from './AboutPageWrapper.jsx';
import Header from './Header.jsx';

import ListPostWrapper from './ListPostWrapper.jsx';


FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<ResolutionsWrapper />),
			
		})

	}
});

FlowRouter.route('/about', {
	action(){
		mount(MainLayout, {
			content: (<AboutPageWrapper />),
			
		})

	}
});

FlowRouter.route('/posts', {
	action(){
		mount(MainLayout, {
			content: (<ListPostWrapper />),
			
		})

	}
});
