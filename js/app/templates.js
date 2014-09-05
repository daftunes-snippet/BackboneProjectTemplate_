define([
	'mustache'
], function (Mustache) {

	var Templates = {};


	Templates.header = [
			'<header><h>Todo List--</h></header>'
	].join('');

	Templates.item = [
		'<p>{{title}}</p>',
		'<button type="button">EDIT</button>'
	].join('');

	Templates.person = [
		'<h3>{{name}}</h3>, {{age}}, {{occupation}}'
	].join('');
	

	return Templates;
});