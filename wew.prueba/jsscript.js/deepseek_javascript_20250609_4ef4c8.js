// Dark mode toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Rep slider (for training.html)
const repSlider = document.getElementById("repSlider");
if (repSlider) {
  repSlider.addEventListener("input", (e) => {
    document.getElementById("repValue").textContent = e.target.value;
  });
}