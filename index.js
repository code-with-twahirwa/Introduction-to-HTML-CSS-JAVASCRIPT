//variable
//functions
//conditionals
//objects
//arrays

function changeBgToYellow() {
  const doc_body = document.querySelector("body");
  if (
    confirm("Are you sure you want to change the background to yellow") === true
  ) {
    doc_body.style.backgroundColor = "yellow";
    console.log("My background is now yellow");
  }
}

function changeBgToOrange() {
  const doc_body = document.querySelector("body");
  if (
    confirm("Are you sure you want to change the background to orange") === true
  ) {
    doc_body.style.backgroundColor = "orange";
    console.log("My background is now orange");
  }
}

function resetBg() {
  const doc_body = document.querySelector("body");
  doc_body.style.backgroundColor = "beige";
}

function showMorePhotos() {
  const photos_para = document.getElementById("more_photos");

  if (photos_para.childElementCount > 1) {
    photos_para.style.display = "flex";
  } else {
    const photos_arr = [
      "./photos/nelson_mandela1.jpg",
      "./photos/nelson_mandela2.jpg",
      "./photos/nelson_mandela3.jpg",
      "./photos/nelson_mandela4.jpg",
      "./photos/nelson_mandela5.jpg",
    ];

    photos_arr.forEach(function (photo) {
      const img = document.createElement("img");
      img.src = photo;
      img.style.height = "200px";
      img.style.width = "200px";

      photos_para.appendChild(img);
    });
  }
}

function hidePhotos() {
  const photos_para = document.getElementById("more_photos");
  photos_para.style.display = "none";
}
