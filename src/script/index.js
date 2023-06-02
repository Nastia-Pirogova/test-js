let dropdownMenuLibrary = document.getElementById('dropdownMenuLibrary');
let dropdownToggleLibrary = document.querySelector('.dropdown-toggle-library');
let dropdownItemsLibrary = document.querySelector('.dropdown-menu-library');

dropdownToggleLibrary.addEventListener('click', toggleDropdownLibrary);
dropdownItemsLibrary.addEventListener('click', selectOptionLibrary);

function toggleDropdownLibrary() {
  if (dropdownMenuLibrary.style.display === 'none' || dropdownMenuLibrary.style.display === '') {
    dropdownMenuLibrary.style.display = 'block';
  } else {
    dropdownMenuLibrary.style.display = 'none';
  }
}

function selectOptionLibrary(e) {
  let selectedOptionLibrary = e.target;
  if (selectedOptionLibrary) {
    selectedOptionLibrary.style.color = '#F87719';
  }
}