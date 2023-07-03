document.addEventListener('DOMContentLoaded', function() {
  var inputBox = document.getElementById('inputBox');
  var buttons = document.querySelectorAll('.calculator button');
  var marquee = document.querySelector('.marq');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var value = button.textContent;

      if (value === 'Ac') {
        inputBox.value = '';
      } else if (value === 'DEL') {
        inputBox.value = inputBox.value.slice(0, -1);
      } else if (value === '=') {
        try {
          inputBox.value = eval(inputBox.value);
        } catch (error) {
          inputBox.value = 'Error';
        }
      } else {
        inputBox.value += value;
      }
        marquee.remove(); // Remove the marquee tag
    });
  });
});
  

        
        