const dropdown = document.getElementById('platformDropdown');
const screen = document.getElementById('screenBack');

dropdown.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('active');
  screenBack.classList.toggle('active');
});