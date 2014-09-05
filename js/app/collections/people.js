define([
	'backbone',
	'app/models/person'
],function(Backbone,Person) {
	'use strict';

	var People =  Backbone.Collection.extend({
	
		model: Person,
	
	});

	return People;
});