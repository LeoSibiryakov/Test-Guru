// Фиксация header

$(function() {
    let header = $('header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });

   $(function() {
    let header = $('header');
    let headerHeight = header.height();
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': headerHeight+'px'
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0
       })
      }
    });
   });


//Показ выпадающего списка

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


// Показ и скрытие модального окна

var button = document.getElementById('button');
var modal = document.getElementById('modal');
var wrapper = document.getElementById('wrapper');

button.onclick = function () {
    modal.style.display = 'block';
    wrapper.style.display = 'block';
}

wrapper.onclick = function () {
	modal.style.display = 'none';
    wrapper.style.display = 'none';
}