function createRectangle(leftPosition, topPosition, imageSrc) {
  const rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");
  rectangle.style.position = "fixed";
  rectangle.style.top = topPosition;
  rectangle.style.left = leftPosition;
  rectangle.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(rectangle);

  const image = document.createElement("img");
  image.src = imageSrc; 
  image.classList.add("image");
  document.body.appendChild(image);

  const rectWidth = parseInt(getComputedStyle(rectangle).width);
  const rectHeight = parseInt(getComputedStyle(rectangle).height);
  const imageSize = Math.min(rectWidth, rectHeight) * 1.3; 

  image.style.maxWidth = `${imageSize}px`;
  image.style.maxHeight = `${imageSize}px`;

  image.style.position = "absolute";
  image.style.top = topPosition;
  image.style.left = `calc(${leftPosition} + ${rectWidth / 2}px)`;
  image.style.transform = "translate(-50%, -50%)";

  return rectangle;
}

const rectangle1 = createRectangle("50%", "50%", "dancer.svg");
//const rectangle2 = createRectangle("30%", "20%", "group.svg"); 

let colorIndex = 0;
const colors = ["#ff0000", "#00ff00", "#0000ff"];

setInterval(() => {
  colorIndex = (colorIndex + 1) % colors.length;
  rectangle1.style.backgroundColor = colors[colorIndex];
  rectangle2.style.backgroundColor = colors[colorIndex];
}, 750);

let isDragging = false;
let initialX, initialY, offsetX, offsetY;
let currentRectangle = null;

function startDragging(event, rectangle) {
  isDragging = true;
  initialX = event.clientX;
  initialY = event.clientY;
  offsetX = rectangle.offsetLeft;
  offsetY = rectangle.offsetTop;
  currentRectangle = rectangle;
}

function moveRectangle(event) {
  if (isDragging && currentRectangle) {
    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;
    currentRectangle.style.left = `${offsetX + deltaX}px`;
    currentRectangle.style.top = `${offsetY + deltaY}px`;
  }
}

function stopDragging() {
  isDragging = false;
  currentRectangle = null;
}

rectangle1.addEventListener("mousedown", (event) => {
  startDragging(event, rectangle1);
});

// rectangle2.addEventListener("mousedown", (event) => {
//   startDragging(event, rectangle2);
// });

document.addEventListener("mousemove", moveRectangle);

document.addEventListener("mouseup", stopDragging);
