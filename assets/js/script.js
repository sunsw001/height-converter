//create a function to click/change
function user_changed() {
  //get the amount from the input
  const feet_field = document.querySelector('.feet_input');
  const inches_field = document.querySelector('.inches_input');

  // const meters_field = feet_field.value * 0.3 + inches_field.value * 0.025;

  document.querySelector('.meters_input').value =
    feet_field.value * 0.3 + inches_field.value * 0.025;
}

document.querySelector('.button').addEventListener('click', user_changed);

//listen for changes
// amount_field.addEventListener('change', user_changed);
// quality_field.addEventListener('change', user_changed);
