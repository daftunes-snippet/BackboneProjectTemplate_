define([

	'backbone'

],function(Backbone) {

	'use strict';

	var Person =  Backbone.Model.extend({
		defaults: {
			name: 'don',
			age: '27',
			occupation: 'developer'
		}
		
	});

	return Person;

});