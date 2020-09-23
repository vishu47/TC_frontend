// $(document).ready(function(){
//   $('.dropdown-submenu a.test').on("click", function(e){
//     $(this).next('ul').toggle();
//     e.stopPropagation();
//     e.preventDefault();
//   });
// });

$('.dropdown-submenu .dropdown-toggle').on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).next('.dropdown-menu').toggle();
});