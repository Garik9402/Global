//  переходы по пунктам меню
const headerMenuItem = document.querySelectorAll(".header__nav-item-link");
for (let i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener("click", function () {
    for (let y = 0; y < headerMenuItem.length; y++) {
      headerMenuItem[y].classList.remove("header__nav-item-link--active");
    }
    this.classList.add("header__nav-item-link--active");
  });
}
//  ограничения на ввод символов
 let searchNode = document.getElementById('search')
 let promptNode = document.getElementById('prompt')
 const simvolsNode = /['!','@','#','$','%','^','&','*','(',')']/g;
const promptTextNode = 'Недопустимый символ для ввода'
 searchNode.oninput = function(){
  if (this.value.match(simvolsNode)){
   this.value = this.value.replace(simvolsNode, '') 
   promptNode.innerHTML = promptTextNode
}
else{
   promptNode.innerHTML = '';
}

 }
 


