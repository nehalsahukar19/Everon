let image= document.getElementById('image');
        let images= ["images/tarang.jpeg","images/karate1.jpeg","images/tarang1.jpeg","images/education.jpeg"];
        setInterval(function(){
            let random = Math.floor(Math.random() * 4);
            image.src = images[random];
        }, 800);