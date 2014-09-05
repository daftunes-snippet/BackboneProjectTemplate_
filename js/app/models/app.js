define([
	'backbone',
	'backbone.localStorage'
], function (Backbone) {

	'use strict';

	var AppModel = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage("AppSettings"),
		defaults: {
			
		},
		initialize: function(){
			
		}
	});

	return AppModel;
});