const allPages = document.getElementById("allPages");
const checkboxes = document.querySelectorAll(".page-checkbox");
const doneBtn = document.querySelector(".done-btn");

// Toggle all checkboxes
allPages.addEventListener("change", () => {
  checkboxes.forEach((cb) => (cb.checked = allPages.checked));
});

// Maintain "All pages" state
checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    if (!cb.checked) {
      allPages.checked = false;
    } else if (Array.from(checkboxes).every((box) => box.checked)) {
      allPages.checked = true;
    }
  });
});

// Done button behavior
doneBtn.addEventListener("click", () => {
  const selectedPages = Array.from(checkboxes)
    .map((cb, index) => (cb.checked ? `Page ${index + 1}` : null))
    .filter(Boolean);

  if (allPages.checked) {
    alert("✅ All pages selected!");
  } else if (selectedPages.length > 0) {
    alert(`Selected: ${selectedPages.join(", ")}`);
  } else {
    alert("⚠️ No pages selected!");
  }
});
