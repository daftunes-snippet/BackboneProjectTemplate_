define([
	'mustache'
], function (Mustache) {

	var Templates = {};


	Templates.header = [
			'<header><h>Todo List--</h></header>'
	].join('');

	Templates.item = [
		'<item>',
		'<p>{{title}}</p>',
		'<button type="button">EDIT</button>',
		'</item>'
	].join('');
	


	for (var tmpl in Templates) {
	    if (Templates.hasOwnProperty(tmpl)) {
	        Templates[tmpl] = Mustache.parse(Templates[tmpl]);  
	    }
	}





	return Templates;
});