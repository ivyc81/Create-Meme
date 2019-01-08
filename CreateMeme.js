document.addEventListener("DOMContentLoaded", function(){
    var thirdButton = document.querySelector(".submit");
    thirdButton.addEventListener("click", function(){
        var container= document.createElement('div');
        container.setAttribute("id","memeContainer");
        container.setAttribute("class","meme");
        var photoURL=document.querySelector("#URL");
        var uppertext=document.querySelector("#texttop");
        var lowertext=document.querySelector("#textbottom");
        alert(photoURL);
        var upp= document.createElement("span");
        upp.innerText= uppertext.value;
        upp.setAttribute("id","top");
        var newPhoto = document.createElement("img");
        newPhoto.setAttribute("src",photoURL.value);
        newPhoto.setAttribute("alt", "sorry, something went wront!");
        newPhoto.setAttribute("id", "memephoto")
        newPhoto.setAttribute("class", "meme");
        var bottom= document.createElement("span");
        bottom.innerText= lowertext.value;
        bottom.setAttribute("id", "bottom")
        var removex = document.createElement("img");
        removex.setAttribute("src", "http://cdn.onlinewebfonts.com/svg/img_439489.png");
        removex.setAttribute("id", "removex");
        container.appendChild(newPhoto);        
        container.appendChild(upp);
        container.appendChild(bottom);
        container.appendChild(removex); 
        var body=document.querySelector("body");
        body.appendChild(container);
        photoURL.value = '';
        uppertext.value = '';
        lowertext.value = '';

    });
});
