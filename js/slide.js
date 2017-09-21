var i =0, images = ["images/011.png",
                    "images/012.png",
                    "images/013.png",
                    "images/014.png"];


    function mySlide(param) {

    	if (param === 'next') 
    	{
    		i++;

    		if (i === images.length) {i = images.length - 1;}
    		}else{
    			i--;
    			if (i < 0) { i = 0; }
    		}

    		document.getElementById('slide').src = images[i];
    	
    }