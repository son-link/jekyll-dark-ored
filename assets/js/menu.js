var main_nav = document.querySelector('#main-nav');
var toggle_menu = document.querySelector('#toggle-menu');

toggle_menu.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  this.classList.toggle('open');
  main_nav.classList.toggle('open');
});

document.querySelector('body').addEventListener('click', function(e){
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
