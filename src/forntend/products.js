document.getElementById('images').addEventListener('change', function () {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = ""; // Clear previous previews

  const files = this.files;

  if (files.length < 4) {
    alert("Please upload at least 4 images.");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')) continue;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.margin = "5px";
      img.style.objectFit = "cover";
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
