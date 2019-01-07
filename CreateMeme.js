document.addEventListener("DOMContentLoaded", function(){
    var thirdButton = document.querySelector(".submit");
    thirdButton.addEventListener("click", function(){
        var container= document.createElement('div');
        container.setAttribute("id","memeContainer");
        container.setAttribute("class","meme");
        var photoURL=document.querySelector("#URL").value;
        var uppertext=document.querySelector("#texttop").value;
        var lowertext=document.querySelector("#textbottom").value;
        alert(photoURL);
        var upp= document.createElement("span");
        upp.innerText= uppertext;
        upp.setAttribute("id","top");
        var newPhoto = document.createElement("img");
        newPhoto.setAttribute("src",photoURL);
        newPhoto.setAttribute("alt", "sorry, something went wront!");
        newPhoto.setAttribute("id", "memephoto")
        newPhoto.setAttribute("class", "meme");
        var bottom= document.createElement("span");
        bottom.innerText= lowertext;
        bottom.setAttribute("id", "bottom")
        var body=document.querySelector("body");
        container.appendChild(newPhoto);        
        container.appendChild(upp);
        container.appendChild(bottom);
        body.appendChild(container);
    });
});
