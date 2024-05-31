export function toggleDropdown() {
  const textareaBtn = document.getElementById('textareaBtn');
  const textareaBlock = document.getElementById('input-block');
  const textareaIcon = document.getElementById('textareaIcon');

  const navigationBtn = document.getElementById('navigationBtn');
  const navigationMenu = document.getElementById('navigationMenu');
  const navigationIcon = document.getElementById('navigationIcon');

  textareaBtn.addEventListener('click', () => {
    textareaBlock.classList.toggle('none');
    if (textareaIcon.classList.contains('fa-angle-up')) {
      textareaIcon.classList.remove('fa-angle-up')
      textareaIcon.classList.add('fa-angle-down')
    }
    else {
      textareaIcon.classList.remove('fa-angle-down')
      textareaIcon.classList.add('fa-angle-up')
    }
  });

  navigationBtn.addEventListener('click', () => {
    navigationMenu.classList.toggle('none')
    if (navigationIcon.classList.contains('fa-angle-up')) { 
      navigationIcon.classList.remove('fa-angle-up')
      navigationIcon.classList.add('fa-angle-down')
    } 
    else {
      navigationIcon.classList.remove('fa-angle-down')
      navigationIcon.classList.add('fa-angle-up')
    }
  })
}
