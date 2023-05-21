// Create the rectangle shape
const shape = document.createElement("div");
shape.classList.add("rectangle");
document.body.appendChild(shape);

// Create the image element
const image = document.createElement("img");
image.src = "dancer.jpg"; // Replace with the appropriate path to your image file
image.classList.add("image");
document.body.appendChild(image);

// Center align the rectangle
shape.style.position = "fixed";
shape.style.top = "50%";
shape.style.left = "50%";
shape.style.transform = "translate(-50%, -50%)";

// Calculate the image size based on the rectangle dimensions
const rectWidth = parseInt(getComputedStyle(shape).width);
const rectHeight = parseInt(getComputedStyle(shape).height);
const imageSize = Math.min(rectWidth, rectHeight) * 1.4; // Adjust the scaling factor as needed

// Adjust the image size while maintaining aspect ratio
image.style.maxWidth = `${imageSize}px`;
image.style.maxHeight = `${imageSize}px`;

// Calculate the combined width of the rectangle and image
const totalWidth = rectWidth + imageSize;

// Position the image flush with the right edge of the rectangle
image.style.position = "absolute";
image.style.top = "50%";
image.style.left = `calc(50% + ${rectWidth / 2}px)`;
image.style.transform = "translate(0%, -40%)";

// Update the container size to accommodate the total width
const container = document.querySelector("section");
container.style.width = `${totalWidth}px`;

// Initialize color rotation variables
let colorIndex = 0;
const colors = ["#ff0000", "#00ff00", "#0000ff"];

// Update the color rotation every 0.5 seconds
setInterval(() => {
  colorIndex = (colorIndex + 1) % colors.length;
  shape.style.backgroundColor = colors[colorIndex];
}, 600);

// Add click event listener to the rectangle
shape.addEventListener("click", function() {
  // Create the text box element
  const textBox = document.createElement("textarea");
  textBox.placeholder = "Enter your message";
  textBox.classList.add("textbox");
  
  // Create the submit button element
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  
  // Create a container for the text box and submit button
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  textContainer.appendChild(textBox);
  textContainer.appendChild(submitButton);
  
  // Append the text container to the body
  document.body.appendChild(textContainer);
  
  // Prevent default click behavior
  event.preventDefault();
});
