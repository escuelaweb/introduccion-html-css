/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'whhglyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-gameboy' : '&#x71;',
			'icon-nintendods' : '&#x77;',
			'icon-tictactoe' : '&#x65;',
			'icon-stove' : '&#x72;',
			'icon-tank' : '&#x74;',
			'icon-spaceinvaders' : '&#x79;',
			'icon-pokemon' : '&#x75;',
			'icon-skull' : '&#x69;',
			'icon-cassette' : '&#x6f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};