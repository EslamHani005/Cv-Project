let jsss=document.getElementById("jss");
for(let i=0;i<projects.length;i++){
    var currentproject=projects[i];
    var currentdiv=document.createElement("div");
    var divstyle=document.createAttribute("style");
    divstyle.value="display:inline-block;width:300px;margin:10px;";
    currentdiv.setAttributeNode(divstyle);
    let title=document.createElement("h3");
  let textnode= document.createTextNode(currentproject.name);
   title.appendChild(textnode);
   let currentimg=document.createElement("img");
   let source=document.createAttribute("src");
   source.value=currentproject.img;
currentimg.setAttributeNode(source);
let imgstyle=document.createAttribute("style");
imgstyle.value="width:150px;height:150px;";
currentimg.setAttributeNode(imgstyle);
let info=document.createElement("p");
let infopain=document.createTextNode(currentproject.desc);
info.appendChild(infopain);
currentdiv.appendChild(title);
currentdiv.appendChild(currentimg);
currentdiv.appendChild(info);
jsss.appendChild(currentdiv);
}