define([
	'app/views/app',
	'app/routers/router',
	'app/models/app'
], function (AppView, Router, AppModel) {

	'use strict';


	var initialize = function () {
		var appModel = new AppModel({id:1});

		var appView = new AppView({model: appModel});
		

		var router = new Router(appView);
		Backbone.history.start();

		appModel.fetch();

	};

	return {
		initialize: initialize
	};

	
});




