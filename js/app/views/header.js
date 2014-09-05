define([
	'jquery',
	'backbone',
	'app/templates',
	'mustache'
],function($, Backbone, Templates, Mustache) {
	'use strict';

	var HeaderView = Backbone.View.extend({	
		
		id:'',
	
		template: Templates.header,
	
	
		events: {
				'click #header': 'onClickHander'
		},	
		
		onClickHander: function (evt) {
			alert('This is a todo application.');
			
		},

		initialize: function (){
			
		},
		
		render: function() {
			
			var _html = Mustache.render(this.template);
			this.$el.html(_html);
			
			return this;
		}
	});

	return HeaderView;
});
