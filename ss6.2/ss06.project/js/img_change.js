var images = [
    "/ss06.project/asset/R.jpg",
    "/ss06.project/asset/R (1).jpg",
    "/ss06.project/asset/R (2).jpg", 
    "/ss06.project/asset/R (3).jpg", 
    "/ss06.project/asset/R (4).jpg", 
    "/ss06.project/asset/R (5).jpg", 
  ]; 
  var index = 0; 

  function changeImage() {
    document.getElementById("image").src = images[index];
    index = (index + 1) % images.length; 
  }
  setInterval(changeImage, 3000);