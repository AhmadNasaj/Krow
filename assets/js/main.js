/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
   const toggle = document.getElementById(toggleId),
   sidebar = document.getElementById(sidebarId),
   main = document.getElementById(mainId)

   if(toggle && sidebar && main){
       toggle.addEventListener('click', ()=>{
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
           /* Add padding main */
           main.classList.toggle('main-pd')
       })
   }
}
showSidebar('header-toggle','sidebar', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

/*=============== SEARCH BAR JS ===============*/
// const toggleSearch = (search, button) =>{
//     const searchBar = document.getElementById(search),
//           searchButton = document.getElementById(button)
 
//     searchButton.addEventListener('click', () =>{
//         // We add the show-search class, so that the search bar expands
//         searchBar.classList.toggle('show-search')
//     })
//  }
//  toggleSearch('search-bar', 'search-button')


/*=============== Notification ===============*/
var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}
/*=============== Selections ===============*/
var box1  = document.getElementById('box1');
var down = false;


function toggleSelect(){
	if (down) {
		box1.style.height  = '0px';
		box1.style.opacity = 0;
		down = false;
	}else {
		box1.style.height  = '510px';
		box1.style.opacity = 1;
		down = true;
	}
}

// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth1').removeClass('cS-hidden');
        } 
    });  
  });

  