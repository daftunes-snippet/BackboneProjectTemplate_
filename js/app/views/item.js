define([
	'jquery',
	'backbone',
	'mustache',
	'app/models/itemModel',
	'app/templates'
], function ($, Backbone, Mustache, ItemModel, Templates) {

	'use strict';

	var ItemView = Backbone.View.extend({

		model: new ItemModel(),

		template: Templates.item,

		initialize: function() {
			this.model.on('change', this.render, this);
		},

		events: {
			'click button': 'onClickHandler'
		},

		onClickHandler: function (evt) {
			console.log(this.model.get('title'));
			var editedItem = prompt(this.model.get('title'));
			this.model.set('title', editedItem);
		},

		render: function() {
			
			var _html = Mustache.render(this.template, this.model.toJSON());

			console.log(this.model, _html);
			this.$el.html(_html);
			return this;
		}

	});

	return ItemView;
});