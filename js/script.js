let currentImages = [];
let currentIndex = 0;

// Open modal with clicked project
document.querySelectorAll('.project-image').forEach(img => {
  img.addEventListener('click', function() {
    const title = this.dataset.title;
    const desc = this.dataset.desc;
    currentImages = JSON.parse(this.dataset.images);
    currentIndex = 0;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = desc;
    document.getElementById('modalImage').src = currentImages[currentIndex];
  });
});

// Next image
document.getElementById('nextImage').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('modalImage').src = currentImages[currentIndex];
});

// Previous image
document.getElementById('prevImage').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('modalImage').src = currentImages[currentIndex];
});