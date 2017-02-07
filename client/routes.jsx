import React from "react";
import {mount} from "react-mounter"

import {MainLayout} from './layouts/MainLayout.jsx';
import App from './App.jsx'
import Header from './Header.jsx'


FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<App />),
			header: (<Header />)
		})

	}
});