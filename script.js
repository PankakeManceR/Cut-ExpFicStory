// Your story paragraphs
const paragraphs = [
  "Once upon a time, there was a mysterious forest.",
  "The trees whispered secrets as the wind blew through them.",
  "In the heart of the forest, a hidden path led to an ancient tree.",
  "Beneath the tree, a door opened to another world.",
  "Whoever entered the door was never the same again."
];

let currentIndex = 0;
const paragraphElement = document.getElementById("story-paragraph");

// Function to update the displayed paragraph
function updateParagraph() {
  paragraphElement.textContent = paragraphs[currentIndex];
  currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Initially display the first paragraph
updateParagraph();

// Change the paragraph every 5 seconds
setInterval(updateParagraph, 5000);
