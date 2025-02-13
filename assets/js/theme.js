// let mode = ui('mode', 'light');

document
  .getElementById('dark_mode_toggler')
  .addEventListener('click', toggleTheme);

function toggleTheme() {
    _trigger_ui_mode();
}

function init_mode() {
  if (localStorage.getItem('ui_mode')) {
    let new_mode = localStorage.getItem('ui_mode');
    console.log(`Mode detected: ${new_mode}`);
    _trigger_ui_mode(new_mode);
  } else {
    let mode = ui('mode', 'auto');
  }
  if (themeColor) {
      ui('theme', themeColor);
  }
}

init_mode();


function _trigger_ui_mode(set_mode = null) {
  let new_mode = '';
  let current_mode = ui('mode');
  if (set_mode) {
    new_mode = ui('mode', set_mode);
  } else {
    new_mode = ui('mode', current_mode == 'dark' ? 'light' : 'dark');
  }
  localStorage.setItem('ui_mode', new_mode);
  _toggleIcons();
  console.debug(`old: ${current_mode} new; ${new_mode}`);
}

function _toggleIcons() {
  let mode = ui('mode');
  let old_element = document.querySelector(
    `#dark_mode_toggler > i.str_toggle_${mode}`,
  );
  old_element.classList.remove('active');
  let other_mode = mode == 'dark' ? 'light' : 'dark';
  let new_element = document.querySelector(
    `#dark_mode_toggler > i.str_toggle_${other_mode}`,
  );
  new_element.classList.add('active');
}   