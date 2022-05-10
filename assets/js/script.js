var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// sm screen search from
const searchBtn = document.querySelector('#navbar-search-form .btn');
const searchBox = document.querySelector('#navbar-search-form .search-elem');
searchBtn.addEventListener('click', function(){
    searchBox.classList.toggle('toggle-search-box');
});


