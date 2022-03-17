/*window.onload = function () {
    // Array of Images
     var backgroundImg=["images/skating.jpg",
                       "images/swimming.jpg",
                       "images/karate.jpg",
                       "images/bharathanatyam.jpg"
                       ]

       setInterval(changeImage, 1000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
   }*/
  let image= document.getElementById('image');
  let images= ['bgforall.jpg','bgforall1.jpg','bgforall2.jpg','bgforall2.jpg'];
  setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
  }, 800);