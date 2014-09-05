({

	paths: {
		'jquery': 'libs/jquery-2.1.1.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'backbone.localStorage': 'libs/backbone.localStorage',
		'mustache': 'libs/mustache'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	},

	appDir:"../",
	baseUrl:"js",
	dir:"../../app-build",
	modules:[
		{
			name:"main"
		}
	]


})