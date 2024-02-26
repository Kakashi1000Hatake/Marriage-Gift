const upload = document.querySelector(".upload");
const inpp = document.querySelector("#inpp");
const upload_img = document.querySelector(".upload-img");
const upload_msg = document.querySelector(".upload-msg");
const upload_btn = document.querySelector(".upload-btn");
upload.addEventListener("click", () => {
  inpp.click();
});

inpp.addEventListener("change", () => {
  upload_img.style.display = "none";
  upload_msg.style.display = "none";

  const number = inpp.files.length;
  upload.innerHTML = `${number} Files`;
  upload_btn.style.display = "block";
});

upload_btn.addEventListener("click", () => {
  alert("Thank You! For this amazing Gesture 😊 ");
});
