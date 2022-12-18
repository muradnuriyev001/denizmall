const mapimage = document.querySelector("#mapimage1")
const zoomin = document.querySelector("#zoominbtn")
const zoomout = document.querySelector("#zoomoutbtn")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")

//Floor Nums

btn1.onclick = function(){
    if(mapimage.src != "assets/img/map1.png"){
        mapimage.src = "assets/img/map1.png"
        btn1.classList.add("jsbtnblue")
        btn2.classList.remove("jsbtnblue")
        btn3.classList.remove("jsbtnblue")
        btn4.classList.remove("jsbtnblue")
        btn5.classList.remove("jsbtnblue")
        
    }
    else{
        return 0 ;
    }
}

btn2.onclick = function(){
    if(mapimage.src != "assets/img/map2.png"){
        mapimage.src = "assets/img/map2.png"   
        btn1.classList.remove("jsbtnblue")
        btn1.classList.add("jsbtn")
        btn2.classList.add("jsbtnblue")
        btn3.classList.remove("jsbtnblue")
        btn4.classList.remove("jsbtnblue")
        btn5.classList.remove("jsbtnblue")
    }

    else{
        return 0 ;
    }
}

btn3.onclick = function(){
    if(mapimage.src != "assets/img/map3.png"){
        mapimage.src = "assets/img/map3.png"
        btn1.classList.remove("jsbtnblue")
        btn2.classList.remove("jsbtnblue")
        btn3.classList.add("jsbtnblue")
        btn4.classList.remove("jsbtnblue")
        btn5.classList.remove("jsbtnblue")
    }

    else{
        return 0 
    }
}

btn4.onclick = function(){
    if(mapimage.src != "assets/img/map4.png"){
        mapimage.src = "assets/img/map4.png"
        btn1.classList.remove("jsbtnblue")
        btn2.classList.remove("jsbtnblue")
        btn3.classList.remove("jsbtnblue")
        btn4.classList.add("jsbtnblue")
        btn5.classList.remove("jsbtnblue")
    }

    else{
        return 0 
    }
}

btn5.onclick = function(){
    if(mapimage.src != "assets/img/map5.png"){
        mapimage.src = "assets/img/map5.png"
        btn1.classList.remove("jsbtnblue")
        btn2.classList.remove("jsbtnblue")
        btn3.classList.remove("jsbtnblue")
        btn4.classList.remove("jsbtnblue")
        btn5.classList.add("jsbtnblue")
    }

    else{
        return 0 
    }
}

//Zoom Buttons

var clickCounter = 0;

zoomin.onclick = function(){
    clickCounter++
    if(clickCounter == 1){
        mapimage.classList.add("zoomscale")

    }

    else if (clickCounter == 2){
        mapimage.classList.add("zoomscale2")
    }

}

zoomout.onclick = function(){
    clickCounter--

    if(clickCounter==1){
        mapimage.classList.remove("zoomscale2")
    }

    else{
        mapimage.classList.remove("zoomscale")
    }
}
