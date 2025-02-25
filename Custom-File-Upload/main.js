const file_input = document.getElementById("file_input");
const upload_file = document.querySelector(".upload-file");
var uploaded_image = "";

upload_file.addEventListener("click", () => {
  file_input.click();
});

file_input.addEventListener("change", () => {
  var hide_upload = document.querySelector(".upload-file");
  hide_upload.style.display = "none";

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    var show_img = document.querySelector(".show-img");
    show_img.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(file_input.files[0]);
});
