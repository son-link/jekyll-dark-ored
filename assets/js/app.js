qs = function(ele){
	return document.querySelector(ele);
}

var main_nav = qs('#main-nav');
var toggle_menu = qs('#toggle-menu');
var toggle_search = qs('#toggle-search');
var search_div = qs('#search-div');
var content_div = qs('#content');

toggle_menu.addEventListener('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	this.classList.toggle('open');
	main_nav.classList.toggle('open');
});

qs('body').addEventListener('click', function(e){
		main_nav.classList.remove('open');
		toggle_menu.classList.remove('open');
});

var tables = document.querySelectorAll('table');
tables.forEach(function(t){
	t.classList.add('responsive');
	th = t.querySelectorAll('thead th');
	tr = t.querySelectorAll('tbody tr');
	tr.forEach(function(e){
		th.forEach(function(e2, i){
			e.children[i].setAttribute('data-title', e2.innerHTML);
		});
	});
});

toggle_search.addEventListener('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	if(search_div.classList.contains('open')){
		qs('#search-input').value = '';
		qs('#search-results').innerHTML = '';
		search_div.classList.remove('open');
		content_div.classList.remove('no-scroll');
	}else{
		search_div.classList.add('open');
		content_div.classList.add('no-scroll');
	}
});

qs('#search-input + button').addEventListener('click', function(){
	qs('#search-input').value = '';
	qs('#search-results').innerHTML = '';
});