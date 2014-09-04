({

	paths: {
		'jquery': 'libs/jquery-1.10.1.min',
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
		},
		'mustache': {
			exports: 'Mustache'
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