// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the color box and button elements
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');

  // Function to generate a random hexadecimal color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add event listener to the button
  changeColorBtn.addEventListener('click', () => {
    // Generate a new color and apply it to the background of the color box
    colorBox.style.backgroundColor = getRandomColor();
  });
});
