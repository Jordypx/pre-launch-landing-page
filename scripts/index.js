// Verify input when click on button
function buttonForm() {
  const inputForm = document.getElementById('inputForm');
  const errorInput = document.getElementById('error');
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (inputForm === '' || inputForm != regex) {
    errorInput.style.display = 'block';
    inputForm.style.border = '2px solid rgb(255, 41, 101)';
  } else {
    errorInput.style.display = 'none';
    inputForm.style.border = '2px solid rgb(255, 41, 101)';
  }
}
